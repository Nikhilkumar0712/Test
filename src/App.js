import logo from './logo.svg';
import './App.css';
import { Box, Input, FormLabel, Heading, Textarea, Button,InputRightElement } from '@chakra-ui/react'
import React from 'react'
import ImageUploading from 'react-images-uploading';
function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <>
      
      <Box
        backgroundColor={'#3182ce'}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}>
          <Box
            boxShadow={"0px 0px 10px #00000029;"}
            backgroundColor={"#fff"}
            width={"450px"}
            padding={"20px"}>
            <Box>
              <Heading>Contact Us</Heading>

              <Box >
                <FormLabel>Your Name</FormLabel>
                <Input placeholder='Your Name' />
              </Box>
              <Box mt={2}>
                <FormLabel>Phone No</FormLabel>
                <Input placeholder='Phone No' />
              </Box>
              <Box mt={2}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
              </Box>
              <Box mt={2}>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder='Address' />
              </Box>
              <Box mt={2}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder='Message' />
              </Box>
              <Box>
              <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button colorScheme='blue' variant='solid' 
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps} 
              mt={2}>Image Upload</Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item" style={{"marginTop":"10px"}}>
                <img src={image['data_url']} alt="" width="200" />            
              </div>
            ))}
          </div>
        )}
      </ImageUploading> 
              </Box>
              <Box textAlign={"center"} mt={2}>
                <Button colorScheme='blue' variant='solid'>Submit</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
