import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@mui/material'
import FileUpload from '../components/fileupload'

const Indexpage = () => {
  return (
    <IndexContainer>
        <h1>GPT서비스 기반 새로운 시작을 기다리는 동물 추천 플랫폼</h1>
        <FileUpload />
        {/* <UploadButton 
        variant='contained'
        > 파일을 업로드 </UploadButton> */}
        { <Link to="/animal"><button type="button">동물분류</button></Link> }
        { <Link to="/chat"><button type="button">Chat</button></Link> }
    </IndexContainer>
  )
}

export default Indexpage

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
const UploadButton = styled(Button)`
  width: 8rem;
`