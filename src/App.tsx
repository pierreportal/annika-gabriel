import { useQuery } from '@apollo/client';
import { CardGallery } from './components/elements/CardGallery';
import { SliderLoop } from './components/elements/SliderLoop';
import { Header } from './components/Header';
import { Routing } from './components/Routing';
import { WORKS } from './gql/queries/getWorks';

// import { test } from './services/admin/index';

function App() {
  const { loading, error, data } = useQuery(WORKS);

  // test();

  console.log(data, error)



  return (

    <div className="App" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', gap: '30px'
    }}>
      <Header maxHeight={100} minHeight={30} />
      <main>
        <Routing />
      </main>


      {/* <section>

        <h1>HOULOU</h1>

        <SliderLoop width={600} height={100} delay={2000}>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </SliderLoop>
      </section>

      <section>

        <CardGallery width={600} height={400} radius={50} offset={40}>
          <div>Card A</div>
          <div>Card B</div>
          <div>Card C</div>
          <div>Card D</div>
        </CardGallery>
      </section>

      <section>

        <SliderLoop width={120} height={100} delay={2000}>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </SliderLoop>

        <CardGallery width={300} height={200} radius={50} offset={30}>
          <div>Card A</div>
          <div>Card B</div>
          <div>Card C</div>
          <div>Card D</div>
        </CardGallery>
      </section> */}
    </div>
  );
}

export default App;
