import styles from "../layout/Projects.module.css"
import Container from "../layout/Container"
import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'


function Projects() {

    const location = useLocation()
    let message = ""
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div class={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message type="succes" msg={message} />}
            
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>

        </div>

    )
}
export default Projects