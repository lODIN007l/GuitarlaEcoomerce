import Head from 'next/head'

const Layouts = ({children,pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLa - {pagina}</title>
        </Head>
        {children}
    </div>
  )
}

export default Layouts