import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';

export default function AddTask() {
  var username = 'rs13';
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:4200/addproject', {username, projectTitle, projectDescription});
      
//       console.log('Task added successfully:', response.data);
//       // Optionally, you can reset the form fields after successful submission
//       setProjectTitle('');
//       setProjectDescription('');
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4200/addproject', {username, projectTitle, projectDescription});
      
      console.log('Task added successfully:', response.data);
      // Optionally, you can reset the form fields after successful submission
      setProjectTitle('');
      setProjectDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    
    <div>
        <Head>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
                crossorigin="anonymous">
            </link>
        </Head>
        <Navbar />
        <form onSubmit={handleSubmit} style={{ marginLeft: '20%', marginRight: '20%' }}>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style={{ marginTop: '100px' }}>Enter a Project Title</label>
            <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Add a Project description</label>
            <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}></textarea>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Submit Project</button>
        </div>
        </form>
    </div>
  );
}
