import Carousel from 'better-react-carousel'
import styledComponents from "styled-components"

const Container = styledComponents.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
padding-top: 30px;
`

const Wrapper = styledComponents.div`
height: 100%;
display: flex;
transform: translateX(-100vw)
transition: all 2.5s ease;
`
const ImgContainer = styledComponents.div`
height: 100%;
flex: 1;
`
const Image = styledComponents.img`
height: 80vh;
width: 100%;
object-fit: cover;
background-color: red;
` 
const Title = styledComponents.h3`
height: 5em;
font-size: 70px;
display: flex;
justify-content: center;
align-items: flex-end;
`
const Description = styledComponents.p`

display: flex;
justify-content: center;
margin: 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
` 

const Gallery = () => {
    return (
        <Container>
            <Wrapper>
      <Carousel cols={2} rows={1} gap={0} loop={true} autoplay={2000}>
        <Carousel.Item>
            <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1618788856598-1e6fab7a4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxmcnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </ImgContainer>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{
            backgroundColor:"#FEFEDF",
            height:"99.4%",
          }}>
            <Title>
            <h6>New and Hot!</h6>
            </Title>
            <Description>
            <p>Mix and match fruits to create your own flavor</p>
            </Description>
            </div>
   
        </Carousel.Item>
        <Carousel.Item>
            <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1629923464290-008980c6c083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </ImgContainer>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{
            backgroundColor:"#FF9671",
            height:"99.4%",
          }}>
            <Title>
            <h6>New and Hot</h6>
            </Title>
            <Description>
            <p> 50% off new products</p>
            </Description>
            </div>
   
        </Carousel.Item>
        <Carousel.Item>
            <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1548808918-a33260f83b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk5fHxmcnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          </ImgContainer>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{
            backgroundColor:"#ffd465",
            height:"99.4%",
          }}>
            <Title>
            <h6>New and Hot</h6>
            </Title>
            <Description>
            <p> Free shipping on orders over €20</p>
            </Description>
            </div>
   
        </Carousel.Item>
        {/* ... */}
      </Carousel>
      </Wrapper>
      </Container>
    )
  }
 export default Gallery
