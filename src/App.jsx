// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex my-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>My Career and Skills</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>

    <section className='text-gray-700 border-b border-gray-200'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
          My Portfolio WebSite</h1>
          <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。特異な言語はHTML, CSS, JavaScript, TypeScript, PHP, SQL, ReactなどWeb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="/img/myPicture.png" alt="" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWebサイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。</p>
          <p>いかに個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。またPythonwo使ってAIによる株価の予想サイトを構築しました。また数件の事業所のWebサイトの構築など滝にわたります。</p>
        </div>
        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>

            <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="-3 -2 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
                        fill="currentColor"
                      />
                    </svg>
                </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase,AWS, ログイン・ログアウト認証機能, メッセージ投稿機能, 検索機能, お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="-3 -2 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>AI Finance</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase,AWS, ログイン・ログアウト認証機能, メッセージ投稿機能, 検索機能, お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
              </div>
            </div>
          </div>

          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="-3 -2 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Site Dev</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css, firebase,AWS, ログイン・ログアウト認証機能, メッセージ投稿機能, 検索機能, お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る → </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 my-auto flex flex-wrap'>
        {/* left side */}
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt="" className='rounded' width="240" />
        </div>
        {/* right side */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
          <div>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
              <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
            </div>
            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{ width: "60%" }}>60%</div>
            </div>
            <h2>Python</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-amber-500 text-xs leading-none py-1 text-center text-white' style={{ width: "80%" }}>80%</div>
            </div>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}

export default App
