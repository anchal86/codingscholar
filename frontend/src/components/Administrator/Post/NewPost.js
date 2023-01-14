import React, { Component} from 'react';
import {Editor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';
import withRouter from '../withRouter';
import toastr from 'toastr';


class NewPost extends Component {
    constructor(props) {
        super(props);
        this.user=JSON.parse(localStorage.getItem('user'));
       
        // console.log(this.user)
        this.state = {
            title:'',
            slug:'',
            metaDescription:'',
            metaKeywords:'',
            postContent: '',
            courseID:'',
            items:[],
            error:[]
        };
        
      }
      
        handleChange=(e)=>{
            const {name, value}=e.target
            this.setState({
                ...this.state,
                [name]:value
            });
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            
            // console.log(this.user)
            axios.post('http://localhost:8000/api/v1/post/',
            {
                "title":this.state.title,
                "slug":this.state.slug,
                "metaDescription":this.state.metaDescription,
                "metaKeywords":this.state.metaKeywords,
                "postContent":this.state.postContent,
                "courseID":this.state.courseID
                
            }, 
            {
                headers: {
                    
                    "Authorization": `Bearer ${this.user.token}`,
                    'Content-Type': 'application/json'
                }
            }   
               
            ).then((data)=>{
                if(data.data.errors){
                    let arr=[]
                    data.data.errors.forEach(element => {
                        let key=Object.keys(element)
                        let value=Object.values(element)[0]
                        arr[key]=value 
                    });
                //    console.log(this.state)
                    this.setState({error:arr})
                  
                }
                else if(data.data.msg){
                    toastr.options.progressBar = true;
                    toastr.info("New Post Added Successfully.");
                    this.setState({title:"",slug:"",metaDescription:"",metaKeywords:"",postContent:"",courseID:""});
                    this.props.navigate('/administrator/post/view');
                }
            })
        };
    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/course',{
            headers: {'Content-Type': 'application/json'}
        }).then((data)=>{
            this.setState({items:data.data.msg})
            // this.setState({courseID:data.data.msg[0]._id});
        }).catch((err)=>console.log(err))
       
    }
    
    render() {
        return (
           <>
            <div className="d-flex justify-content-around align-items-center flex-wrap mb-4 py-5">
                <div className="card card-width mt-2">
                    <div className="card-header">
                        
                        <Link to="/administrator/post/view" className="btn btn-dark">
                            <i className="fa-solid fa-eye"></i> View Posts
                        </Link>
                    
                    <h3 className="text-center form-heading">New Post</h3>
                    </div>
                    <div className="card-body">
                
                    <form className="py-2" onSubmit={this.handleSubmit}>
                                
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                            <label htmlFor="Course">Course *</label>
                            {this.state.items!==0 ?
                            <select className="form-control" name="courseID" onChange={(e)=>this.setState({courseID:e.target.value})}>
                                
                                    {this.state.items.map((item)=>{
                                        // console.log(item)
                                        // if (item._id==this.state.courseID) {

                                        //     return(<option value={item._id} key={item._id} selected>{item.name}</option>)

                                        // } else {

                                            return(<option value={item._id} key={item._id} >{item.name}</option>)

                                        // }
                                    
                                    })}
                            
                            </select>
                            :''}
                            </div>
                        </div>
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                            <label htmlFor="Title">Title *</label>
                                <input type="text" 
                                className="form-control" 
                                name="title"
                                value={this.state.title}
                                placeholder=" Enter Post Title"
                                onChange={this.handleChange}
                                />
                                <span className="error">{this.state.error.title}</span>
                                
                            </div>
                        </div>
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                                <label htmlFor="Slug">Slug *</label>
                                <input type="text" 
                                className="form-control"
                                name="slug"
                                value={this.state.slug}
                                placeholder=" Enter Post Slug"
                                onChange={this.handleChange}
                                />
                            <span className="error">{this.state.error.slug}</span>           
                            </div>
                        </div>
                    
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                                <label htmlFor="postContent">Post Content *</label>
        
                                <CKEditor
                                    editor={Editor}
                                    data={this.state.postContent}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        this.setState({postContent:data})
                                        // console.log({ event, editor, data });
                                }}
                                />
                                <span className="error">{this.state.error.postContent}</span>
                            </div>
                        </div>
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                                <label htmlFor="metaDescription">Meta Description *</label>
                                <textarea name="metaDescription" 
                                className="form-control"
                                value= {this.state.metaDescription}
                                onChange={this.handleChange}
                                >
                                </textarea>
                                <span className="error">{this.state.error.metaDescription}</span>
                            </div>

                        </div>
                        <div className="control-group form-group m-2 p-2">
                            <div className="controls">
                                <label htmlFor="metaKeywords">Meta Keywords *</label>
                                <textarea name="metaKeywords" 
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.metaKeywords}
                                >
                                
                                </textarea>
                                <span className="error">{this.state.error.metaKeywords}</span>
                            </div>

                        </div>
                            
                            
                        <div id="success"></div>
                        {/* For success/fail messages */}
                        <button type="submit" className="btn cbtn btn-block btn-10 m-3">
                            <i className="fa-solid fa-circle-plus"></i> Add Post
                        </button>
                        </form>
                    </div>

                </div>
            </div>
                
           </>
        );
    }
}
export default NewPost;