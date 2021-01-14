import React from 'react'
import styles from '../styles/Home.module.scss'
export default class Grid extends React.Component{
    state={
        C:10,
        R:10,
        start:{x:1,y:4, p: null},
        end:{x:9,y:9, p: null},
        visited:[],
        node:[]
    }
    down=false;
    shiftstart=false;
    shiftend=false;
    componentDidMount(){
        let visited=[]
        for(var i=0; i<this.state.R; i++) {
            visited.push(new Array(this.state.C).fill(false));
        }
        let node= document.querySelectorAll("."+styles.grid+" > div");
        this.setState({
            visited:visited,
            node:node
        });
        
    }
    determineClass(i,j){
        if(this.state.start.x===j&&this.state.start.y===i)
        return styles.start;
        else if(this.state.end.x===j&&this.state.end.y===i)
        return styles.end;
        else
        return styles.box;  
    }
    checkSE(i,j){
        return (i==this.state.start.y&&j==this.state.start.x)||(i==this.state.end.y&&j==this.state.end.x);
    }
    mouseDown=(i,j)=>{
        if(this.state.node&&this.state.visited){
    
        let node = this.state.node;
        let visited = this.state.visited;
        if(this.checkSE(i,j)){
            if(this.state.start.x==j&&this.state.start.y==i){
                this.shiftstart=true;   
                node[this.state.C*i+j].classList.remove(styles.start);
                // node[this.state.C*i+j].classList.add(styles.box);
            }else{
                this.shiftend=true;
                node[this.state.C*i+j].classList.remove(styles.end);
                // node[this.state.C*i+j].classList.add(styles.box);
            }
            return;
        }
        this.down=true;
        if(visited[i][j]){
            visited[i][j]=false;
            node[this.state.C*i+j].classList.remove(styles.wall);
            return
        }
        if(!this.checkSE(i,j)){
            node[this.state.C*i+j].classList.add(styles.wall);
            visited[i][j]=true;
            
            this.setState({
                visited:visited
            })
        }
        }
    }
    mouseLeave=(i,j)=>{
        if(this.down==true){
            this.down=false;
        }else if(this.shiftstart==true){
            this.shiftstart=false;
        }else if(this.shiftend==true){
            this.shiftend=false;
        }
        
        // console.log("I am leaving now!")
    }
    mouseEnter=(i,j)=>{
        let node = this.state.node;
        if(this.shiftstart){
            this.setState({
                start:{
                    x:j,
                    y:i,
                    p:null
                }
            })
            node[this.state.C*i+j].classList.add(styles.start);
            return;
        }
        if(this.shiftend){
            this.setState({
                end:{
                    x:j,
                    y:i
                }
            })
            node[this.state.C*i+j].classList.add(styles.end);
            return;
        }
        if(this.down){
            this.mouseDown(i,j)
            return;
        }
       
    }
    determineText(i,j){
        if(this.state.start.x===j&&this.state.start.y===i)
        return <div>S</div>;
        else if(this.state.end.x===j&&this.state.end.y===i)
        return <div>E</div>;
        else
        return <div></div>;
    }
    sleep=(ms)=> {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    bfs=async()=>{
        let node = this.state.node;
        console.log(node);
        let q =[];
        let count=0,i,j;
        let visited = this.state.visited;    
        const ri = [-1,1,0,0];
        const ci = [0,0,-1,1];
        if(visited[this.state.start.y][this.state.start.x]){
            for(i=0;i<this.state.R;i++){
                for(j=0;j<this.state.C;j++){
                    if(!node[this.state.C*i+j].classList.contains(styles.wall)){
                        visited[i][j]=false;
                        node[this.state.C*i+j].classList.remove(styles.visited)
                        node[this.state.C*i+j].classList.remove(styles.visiting)
                        node[this.state.C*i+j].classList.remove(styles.path)
                    }
                }
            }
        }
        q.push(this.state.start);
        let dx = this.state.end.x;
        let dy = this.state.end.y;
        let ele={},x,y,r,c;
            while(!q.length==0)
            {
                ele = q[0];
                x = ele.x;
                y = ele.y;
                visited[y][x]=true;
                if(!((y==this.state.start.y&&x==this.state.start.x)||(y==this.state.end.y&&x==this.state.end.x)))
                    node[this.state.C*y+x].classList.add(styles.visited);

                q.splice(0,1);
                if(dx===x&&dy===y){
                    while(ele!==null){
                        console.log("I am inside!")
                        node[this.state.C*(ele.y)+ele.x].classList.add(styles.path);
                        ele=ele.p;
                        await this.sleep(50);
                    }
                    return;
                }
                for(i=0;i<4;i++){
                    r=ri[i]+y;
                    c=ci[i]+x;
                    console.log("Count:"+count++)
                    if(r>=0&&r<this.state.R&&c>=0&&c<this.state.C&&!visited[r][c]){
                        q.push({x:c,y:r,p:ele});
                        visited[r][c]=true;
                        if(!((r==this.state.start.y&&c==this.state.start.x)||(r==this.state.end.y&&c==this.state.end.x)))
                            node[this.state.C*r+c].classList.add(styles.visiting);
                        await this.sleep(30);
                    }
                }
            } 
    }
    dfs=async()=>{
        let node = this.state.node;
        console.log(node);
        let q =[];
        let count=0,i,j;
        let visited = this.state.visited;    
        const ri = [-1,1,0,0];
        const ci = [0,0,-1,1];
        if(visited[this.state.start.y][this.state.start.x]){
            for(i=0;i<this.state.R;i++){
                for(j=0;j<this.state.C;j++){
                    if(!node[this.state.C*i+j].classList.contains(styles.wall)){
                        visited[i][j]=false;
                        node[this.state.C*i+j].classList.remove(styles.visited)
                        node[this.state.C*i+j].classList.remove(styles.visiting)
                        node[this.state.C*i+j].classList.remove(styles.path)
                    }
                }
            }
        }
        q.push(this.state.start);
        let dx = this.state.end.x;
        let dy = this.state.end.y;
        let ele={},x,y,r,c;
            while(!q.length==0)
            {
                ele =  q.pop();
                x = ele.x;
                y = ele.y;
                visited[y][x]=true;
                if(!((y==this.state.start.y&&x==this.state.start.x)||(y==this.state.end.y&&x==this.state.end.x)))
                    node[this.state.C*y+x].classList.add(styles.visited);

                if(dx===x&&dy===y){
                    while(ele!==null){
                        console.log("I am inside!")
                        node[this.state.C*(ele.y)+ele.x].classList.add(styles.path);
                        ele=ele.p;
                        await this.sleep(50);
                    }
                    return;
                }
                for(i=0;i<4;i++){
                    r=ri[i]+y;
                    c=ci[i]+x;
                    console.log("Count:"+count++)
                    if(r>=0&&r<this.state.R&&c>=0&&c<this.state.C&&!visited[r][c]){
                        q.push({x:c,y:r,p:ele});
                        visited[r][c]=true;
                        if(!((r==this.state.start.y&&c==this.state.start.x)||(r==this.state.end.y&&c==this.state.end.x)))
                            node[this.state.C*r+c].classList.add(styles.visiting);
                        await this.sleep(30);
                    }
                }
            } 
    }
    generateWalls=()=>{
        let v=[];
        let node = this.state.node;
        for(var i=0; i<this.state.R; i++) {
            v.push(new Array(this.state.C).fill(false))
        }
        for(var i=0;i< this.state.R; i++){
            for(var j=0; j< this.state.C; j++){
                let rand=Math.floor(Math.random() * 2)
                if(rand===1&&!this.checkSE(i,j)){
                    v[i][j]=true;
                    node[this.state.C*i+j].classList.add(styles.wall);
                }else{
                    node[this.state.C*i+j].classList.remove(styles.wall);
                }
            }
        }
        this.setState({
            visited:v
        })
    }
    clearBoard=()=>{
        let node = this.state.node;
        let visited = this.state.visited;
        for(let i=0;i<this.state.R; i++){
            for(let j=0; j< this.state.C; j++){
                node[this.state.C*i+j].classList.remove(styles.wall)
                node[this.state.C*i+j].classList.remove(styles.visiting)
                node[this.state.C*i+j].classList.remove(styles.visited)
                node[this.state.C*i+j].classList.remove(styles.path)
                visited[i][j]=false;
            }
        }
        this.setState({
            visited:visited
        })
    }
    render(){
        let list=[];
        let box=[];
        for(let i=0;i<this.state.R;i++){
            list=[];
            for(let j=0; j<this.state.C; j++){
                list.push
                    (<div key={j}
                    className={styles.box}
                    className={this.determineClass(i,j)}
                    onMouseDown={()=>this.mouseDown(i,j)}
                    onMouseUp={()=>this.mouseLeave(i,j)}
                    onMouseEnter={()=>this.mouseEnter(i,j)
                    }
                    >{this.determineText(i,j)}</div>)
            }
            box.push(list);
        }

        return(
            <div className={styles.gridP}>
             <div  className={styles.algorithm}>
                <div>Algorithms</div>
                <button onMouseDown={this.bfs} >Run Breadth First Search</button>
                <button onMouseDown={this.dfs} >Run Depth First Search</button>
                <button onMouseDown={this.dfs} >Run A* Search</button>
                <button onMouseDown={this.dfs} >Run dijkstra Search</button>
                <div>Options</div>
                <button onMouseDown={this.generateWalls} >Generate  Random Walls</button>
                <button onMouseDown={this.clearBoard} >Clear Board</button>
             </div>   
            <div className={styles.grid}>
                {box}
            </div>
            </div>
        )
    }
}
