

const MainPage = ()=>{

    // const formData = new FormData();
    // formData.append('username', 'admin');
    // formData.append('password', 'admin');

    // fetch('http://localhost:8080/login', {
    // method: 'POST',
    // headers: {
    //     'Cookie': 'JSESSIONID=D64880F55A6984B4BCB0BF8AEE9CCA39'
    //   },
    // mode: 'no-cors',
    // body: formData
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .then(() => {
        
    // })
    
    // .catch(error => {
    //     console.log(error);
    // });

//     fetch('http://localhost:8080/api/v1/apps/welcome')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


  

//   fetch('http://localhost:8080/api/v1/apps/all-app', {
//   method: 'GET',
//   headers: {
//     'Cookie': 'JSESSIONID=D64880F55A6984B4BCB0BF8AEE9CCA39'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });




  fetch('http://localhost:8080/api/v1/apps/welcome')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

export default MainPage