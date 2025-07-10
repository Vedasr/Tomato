import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class AddMovie extends React.Component
{
    constructor(props){
        super(props);
        // to initialise variables and methods
        this.state={
            // mname:'VedaSri',
            // mtype:'Good',
            // mdesc:'Anxious'
            id:'',
            mname:'',
            mtype:'',
            mdesc:'',
            mlist:[],
            isUpdate:false, //to check whether to update or insert
            message:'',
            isValidate:false
        }
        
        this.getMovieName=this.getMovieName.bind(this)
        this.getMovieType=this.getMovieType.bind(this)
        this.getMovieDesc=this.getMovieDesc.bind(this)
        this.saveMovie=this.saveMovie.bind(this)
        this.getAll = this.getAll.bind(this)
        this.editMovie = this.editMovie.bind(this)
        this.updateMovie = this.updateMovie.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)
        console.log("constructor")
    }
    getMovieName(e){
        this.setState({mname:e.target.value})
    }
    getMovieType(e){
        this.setState({mtype:e.target.value})
    }
    getMovieDesc(e){
        this.setState({mdesc:e.target.value})
    }
    getAll(){
        fetch('http://localhost:5000/movie')
        .then((response)=>{
            return response.json();

        }).then((result)=>{
            this.setState({mlist:result})
        }).catch((err)=>{
            console.log(err);
        })
    }
    editMovie(id){
        fetch('http://localhost:5000/movie/'+id)
        .then((response)=>{
            return response.json();
        }).then((result)=>{
            this.setState({
                id:result[0]._id,
                mname:result[0].name,
                mtype:result[0].type,
                mdesc:result[0].desc,
                isUpdate:true
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    updateMovie(){
        var movie={
            "_id":this.state.id,
            "name":this.state.mname,
            "type":this.state.mtype,
            "desc":this.state.mdesc
        }
         fetch('http://localhost:5000/movie/'+this.state.id,{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(movie)
        }).then((response)=>{
            return response.json();
        }).then((result)=>{
            if(result.message==='Updated'){
                //this.setState({isUpdate:false})
                this.resetForm(); // to reset the form
                this.getAll(); //to refresh the movie list
            }
            else
            alert("error occured")
        }).catch((err)=>{
            console.log(err)
        });
    }
    resetForm(){
        this.setState({
            mname:'',
            mtype:'',
            mdesc:'',
            isUpdate:false
        })
    }
    saveMovie(){
        // to validate form
        if(this.state.mname==='' || this.state.mtype==='' || this.state.mdesc===''){
            this.setState({
                isValidate:false,
                message:'Please fill the details'
            })
            return;
        }
        var movie={
            "name":this.state.mname,
            "type":this.state.mtype,
            "desc":this.state.mdesc
        }
        // this.setState({mlist:this.state.mlist.concat(movie)})
        // console.log(this.state.mlist)

        //connect API call to save movie using fetch API
        fetch('http://localhost:5000/movie/create',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(movie)
        }).then((response)=>{
            return response.json();
        }).then((result)=>{
            if(result.message==='inserted'){
                this.setState({
                    isValidate:true,
                    message:'Movie Saved Successfully'
                })
                //this.setState({isUpdate:false});
                this.resetForm(); // to reset the form
                this.getAll();
            }
            else
            alert("error occured")
        }).catch((err)=>{
            console.log(err)
        });
    }
    deleteConfirm(id){
        this.setState({id:id})
    }
    deleteMovie(){
        fetch('http://localhost:5000/movie/'+this.state.id,{
            method:'DELETE',
            headers:{
                'Content-Type' : 'application/json'
            },
           // body : JSON.stringify(movie)
        }).then((response)=>{
            return response.json();
        }).then((result)=>{
            if(result.message==='deleted'){
                this.setState({id:''})
                //this.setState({isUpdate:false});
                this.resetForm(); // to reset the form
                this.getAll();
            }
            else
                alert("error occured")
        }).catch((err)=>{
            console.log(err)
        });
    }
    render(){
        //console.log("render")
        return(
            <div>
                <hr/>
                <h2>Add Movie-{this.props.title}</h2>
                <hr/>
                <div>
                <form>
                    Movie Name : <input type="text" value={this.state.mname} onChange={this.getMovieName}/> <br/>
                    Movie Type : <input type="text" value={this.state.mtype} onChange={this.getMovieType}/> <br/>
                    Movie Desc : <input type="text" value={this.state.mdesc} onChange={this.getMovieDesc}/> <br/>
                    {(this.state.isUpdate)?
                        <input type="button" value='update' onClick={this.updateMovie} className="btn btn-primary"/>
                        :
                        <input type="button" value="save" onClick={this.saveMovie} className="btn btn-primary"/>
                }&nbsp;
                <input type="button" value="reset" onClick={this.resetForm} className="btn btn-secondary"/> &nbsp;
                     
                </form>
                {(this.state.message!=='')?
                <div>
                    {(this.state.isValidate) ?
                    <div className="alert alert-success">{this.state.message}</div>
                :
                <div className="alert alert-danger">{this.state.message}</div>
                }
                </div>
                :''}
                
                {/* <h4>Name : {this.state.mname}</h4>
                <h4>Type : {this.state.mtype}</h4>
                <h4>Desc : {this.state.mdesc}</h4> */}
                </div>
                <div style={{alignItems:"center"}}>
                <table className="table table-bordered table-striped" style={{marginLeft:"2%",marginRight:"20%"}}>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Desc</th>
                             <th>Edit</th>
                              <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.mlist.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.desc}</td>
                                <td><button className="btn btn-primary" onClick={()=>this.editMovie(item._id)}>Edit</button></td>
                                 <td><button className="btn btn-danger" data-target="#confirmModal" data-toggle="modal" onClick={()=>this.deleteConfirm(item._id)} >Delete</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </div>
                <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      {/* <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
    
      <div class="modal-body">
          Are you sure to delete this movie?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={this.deleteMovie}>Yes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        );
    }

    componentDidMount(){
        // to load default data from renders
        //console.log("componentdidmount")
        // setTimeout(()=>{
        //     this.setState({mname:'Veda Rapolu'})
        // },3000)
        this.getAll();
    }
}
export default AddMovie;
