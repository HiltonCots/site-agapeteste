import styled from 'styled-components'


const ManutencaoContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 50px 0;
    height: 120px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #000;
    font-size: 20px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    color: #000;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
`


function Manutencao() {

    return (
        
        <ManutencaoContainer>
            
            <Titulo>Site em Manutenção.</Titulo>
            <Subtitulo>Compre sua passagem pelo WhatsApp.</Subtitulo>
            
        </ManutencaoContainer>
    )
}

export default Manutencao