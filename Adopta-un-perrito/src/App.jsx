import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header'
import MyCard from './components/MyCard/MyCard'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header title={'Adopta un Perrito'} />

      <div className='container'>
        <div className="row">
          <MyCard
            name='Campeón'
            img='https://media.istockphoto.com/id/1283181807/es/foto/la-mano-del-hombre-est%C3%A1-acariciando-a-un-perro.jpg?s=1024x1024&w=is&k=20&c=RsEg6T2d4WZWO6ib5ALm8-ACPboH4V8kevii1k3vmZ4='
            desc='Un fiel amigo, protector, inteligente y ágil. Tiene mucha energía, ideal para espacios abiertos'
            tagText='Malinois'
            tagColor='warning'
          />
          <MyCard
            name='Batallón'
            img='https://media.istockphoto.com/id/531404251/es/foto/mastino-napoletano-mast%C3%ADn-napolitano.jpg?s=1024x1024&w=is&k=20&c=RzH8Jplz-bCQ0Rv3NhyahwsystMtHCPFirrKNOABdxc='
            desc='De tamaño gigante, el majestuoso Mastín napolitano es un perro fuerte y musculoso. permanece vigilante en todo momento, de carácter apacible, es muy fiel a sus seres queridos'
            tagText='Mastín'
            tagColor='primary'
          />
          <MyCard
            name='Max'
            img='https://media.istockphoto.com/id/1405413907/es/foto/un-retrato-de-un-peque%C3%B1o-cachorro-de-caniche-marr%C3%B3n-claro-parado-en-el-patio-en-la-hierba-y.jpg?s=1024x1024&w=is&k=20&c=YJrHLKhDc0c26A-Wu6ij7nA_qv5ewrjFu3T3rzz4US4='
            desc='Es un perro de aspecto noble, tiene un pelaje abundante y rizado que suele moldearse, es alegre y cariñoso que puede convertirse en un compañero fantástico. También puede ser un buen perro guardián.'
            tagText='Poodle'
            tagColor='success'
          />
          <MyCard
            name='Tíber'
            img='https://media.istockphoto.com/id/1388197136/es/foto/bulldog-franc%C3%A9s.jpg?s=1024x1024&w=is&k=20&c=zoRqKADKEc-X52Utk-UlKBbxYLHC-rNrSPEWS_Q-LgI='
            desc='El bulldog francés es un perro amante de la diversión, lleno de vida y muy cariñoso con sus seres queridos. Es un perro valiente..'
            tagText='Bulldog Francés'
            tagColor='info'
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App