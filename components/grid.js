import React from 'react'
import styles from '../styles/Home.module.scss'
export default class Grid extends React.Component{
    state={
        C:10,
        R:10,
        start:{x:0,y:4, p: null},
        end:{x:9,y:4, p: null},
        visited:[],
        node:[],
        ndij:false
    }
    info=["Breadth first Search is a technique in which we visit the neightbor nodes of current node first and then visit other nodes at next depth breadthwise. It gurantees shortest path. It can't find shortest path for weighted graph.",
"Depth first Search is a technique in which we pick one node and go on the depth of that node first before going to other nodes. It doesn't guarantee shortest path.",
"Dijkstra Algorithm is used to find shortest path for weighted path. Note: To keep things simple weights are randomly assigned to each cell and then according to assigned weight the algorithm will find the shortest path.",
"1.Click and Drag over grid to create WALL.(Only possible in PC)\n2.Click and Drag start or end to change their position. (Only possible in PC)\n3. Run any given algorithm in menu. \n4. Clear Board to run new algorithm.\n5. Generate Random Walls."]
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
                // node[this.state.C*i+j].innerHTML="<div></div>";
                // node[this.state.C*i+j].classList.add(styles.box);
            }else{
                this.shiftend=true;
                node[this.state.C*i+j].classList.remove(styles.end);
            // node[this.state.C*i+j].innerHTML="<div></div>";
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
            // node[this.state.C*i+j].innerHTML="<div>S</div>";
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
            // node[this.state.C*i+j].innerHTML="<div>E</div>";
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
        this.setState({
            ndij:1
        })
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
                    this.setState({
                        ndij:0
                    })
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
                        await this.sleep(40);
                    }
                }
            } 
            this.setState({
                ndij:0
            })
    }
    dfs=async()=>{
        this.setState({
            ndij:2
        })
        this.clear();
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
                    this.setState({
                        ndij:0
                    })
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
                        await this.sleep(40);
                    }
                }
            } 
            this.setState({
                ndij:0

            })
    }
    dijkstra=async()=>{
        this.setState({
            ndij:3
        })
        let node= this.state.node;
        
        let visited= this.state.visited;
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
        visited[this.state.start.y][this.state.start.x]=true;
        this.setState({
            visited:visited
        })  
        let i,j;
        let weight=[];
        for(i=0;i<this.state.R*this.state.C;i++){
            weight.push(-1);
        }
        for(i=0;i<this.state.R;i++){
            for(j=0;j<this.state.C;j++){
                if(!visited[i][j]&&!this.checkSE(i,j)){
                    weight[i*this.state.C+j] = Math.floor(Math.random()*20+1);
                    var child=node[i*this.state.C+j].childNodes;
                    child[0].innerHTML=`${weight[i*this.state.C+j]}`
                }
            }
        }
        let count=0,ii,jj,id,num,k;
        let mark =[];
        for(i=0;i<this.state.R*this.state.C;i++){
            mark.push(false);
        }
        let d = [];
        for(i=0;i<this.state.R*this.state.C;i++){
            d.push(10e5);
        }
        let parent = [];
        for(i=0;i<this.state.R*this.state.C;i++){
            parent.push(null);
        }
        d[this.state.start.y*this.state.C+this.state.start.x]=0;
        console.log("Hey, listen",this.state.start.y*this.state.C+this.state.start.x)
        const ri = [-1,1,0,0];
        const ci = [0,0,-1,1];
        let C = this.state.C,R = this.state.R;
        for(i=0;i<this.state.R*this.state.C;i++){
            j=-1; num=10e5;
            for(id=0;id<this.state.R*this.state.C;id++){
                // console.log("I am d",d[id])
                if(!mark[id]&&d[id]<num){
                    j=id; num = d[id];
                }
            }
            mark[j]=true;
            let r = Math.floor(j/C);
            let c = j-r*C;
            if(r==this.state.end.y&&c==this.state.end.x){
                while(parent[j]!=null){
                    node[j].classList.add(styles.path);
                    j= parent[j];
                    await this.sleep(50);
                }
                node[j].classList.add(styles.path);
                this.setState({
                    ndij:0
                })
                return;
            }
            // console.log("I am J",j);
            if(j!=-1)
            {
            node[j].classList.add(styles.visited);
            for(k=0;k<4;k++){
                let r = Math.floor(j/C);
                let c = j-r*C;
                r =r+ ri[k];
                // console.log("I am inside")
                c =c+ ci[k];
                let index = r*C+c;
                if(r>=0&&r<R&&c>=0&&c<C&&!visited[r][c]){
                    let W = weight[r*C+c];
                    console.log("index",index);
                    if(d[j]+W<d[index]){
                    d[index]=d[j]+W;
                    node[index].classList.add(styles.visiting);
                    parent[index]= j;
                    await this.sleep(40)
                }
                }  
            }
        }
        }
        this.setState({
            ndij:0
        })
    }
    clear(){
        let node = this.state.node;
        for(let i=0;i<this.state.R*this.state.C;i++){
            if(!this.checkSE(Math.floor(i/this.state.C),i-this.state.C*Math.floor(i/this.state.C))){
                // node[i].innerHTML=`<div></div>`
            }else if(Math.floor(i/this.state.C)==this.state.start.y&&i-this.state.C*Math.floor(i/this.state.C)==this.state.start.x){
                // node[i].innerHTML=`<div>S</div>`
            }else{
                // node[i].innerHTML=`<div>E</div>` 
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
        let {R,C}= this.state;
        for(let i=0;i<this.state.R; i++){
            for(let j=0; j< this.state.C; j++){
                node[this.state.C*i+j].classList.remove(styles.wall)
                node[this.state.C*i+j].classList.remove(styles.visiting)
                node[this.state.C*i+j].classList.remove(styles.visited)
                node[this.state.C*i+j].classList.remove(styles.path)
                var child=node[i*this.state.C+j].childNodes;
                if(!this.checkSE(i,j)){
                    child[0].innerHTML=``
                }
                visited[i][j]=false;
            }
        }

        this.clear();
        this.setState({
            visited:visited
        })
    }
    howto=async()=>{
        this.setState({
                ndij:4
        })
        await this.sleep(5000);
        this.setState({
            ndij:false
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
                    onTouchStart={()=>this.mouseDown(i,j)}
                    onTouchMove={()=>this.mouseEnter(i,j)}
                    onTouchEnd={()=>this.mouseLeave(i,j)}
                    onMouseUp={()=>this.mouseLeave(i,j)}
                    onMouseEnter={()=>this.mouseEnter(i,j)
                    }
                    >{this.determineText(i,j)}</div>)
            }
            box.push(list);
        }

        return(
            <div>        
            <div className={styles.gridP}>
            <div className={styles.grid}>
                {box}
            </div>
            {this.state.ndij&&<div className={styles.notice}>{this.info[this.state.ndij-1]}</div>
            || <div  className={styles.algorithm}>
            <div>Algorithms</div>
            <button onMouseDown={this.bfs} >Run Breadth First Search</button>
            <button onMouseDown={this.dijkstra} >Run dijkstra Search</button>
            <button onMouseDown={this.dfs} >Run Depth First Search</button>
            {/* <button onMouseDown={this.dfs} >Run A* Search</button> */}
            <div>Options</div>
            <button onMouseDown={this.generateWalls} >Generate  Random Walls</button>
            <button className={styles.clearBoard} onMouseDown={this.clearBoard} >Clear Board</button>
            <button onMouseDown={this.howto}>How to Use?</button>
            </div>
            }   
            </div>
            </div>
        )
    }
}
