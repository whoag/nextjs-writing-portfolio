import Layout from "../components/common/Layout";

export default function Home(){

  return (
      <Layout>
        <div className="page overflow-hidden max-w-[100vw]">
          <div className="lg:w-full lg:h-screen h-full grid lg:grid-cols-2 lg:grid-rows-1 grid-flow-row grid-rows-2 w-screen lg:m-o mt-40 gap-y-60">
            <div className="col-start-1 grid grid-cols-1 ">
              <div className="h-2/5 grid grid-cols-1 grid-rows-auto gap-4 lg:mb-44 lg:justify-self-end lg:self-center place-self-center w-fit lg:p-0 p-5 z-20">
                <h1 className="desktop:place-self-start ">Exploring Digital Writing </h1>
                <p className="w-4/5 h-1/2 text-xl">A digital collection of various exploratory projects brought to you by Taryn Thompson</p>
                <div className="grid laptop:grid-cols-2 grid-cols-1 laptop:grid-rows-1 place-items-start lg:pb-24">
                  <a className=" laptop:w-[75%] w-full h-14 text-xl outline lg:m-0 mb-6" target="_blank" rel="noreferrer" href="https://express.adobe.com/page/aRiIC4bn0P7lX/">
                    Reflection
                  </a>
                </div>

              </div>
            </div>
            <div className="lg:col-start-2 place-self-center z-20">
              <img
                  src={'/images/hero.svg'}
                  alt="writing"
                  className="desktop:w-[700px] laptop:w-[500px] "
              />
            </div>

          </div>
          <img
              src={"/images/back.svg"}
              alt=''
              className="absolute lg:-bottom-0 -bottom-[310px] lg:w-full lg:h-full lg:z-10 h-[300px] lg:-right-24"
          />
        </div>
      </Layout>
  )
}