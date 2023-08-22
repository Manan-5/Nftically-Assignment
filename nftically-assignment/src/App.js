import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
import icon from "./profile1.png";
import "./button.css";
import chat from "./chat.png";
import sendIcon from "./sendIcon.svg";
import './chatbot.css'


function App() {
  return (
    // <div class="c11 doc-content">
    // <p class="c7"><span
    //         // style={{"overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 621.33px; height: 488.76px;"}}
    //         >
    //           <img
    //             alt="" src="images/image1.jpg"
    //             // style="width: 621.33px; height: 488.76px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
    //             title="" />
    //             {/* </img> */}
    //             </span>
    //     {/* <hr> */}
    // </p>
    // <p class="c3"><span class="c2">Interacting with Shahrukh&#39;s Licensed Al Persona</span></p>
    // <p class="c3"><span class="c9">Avatar</span></p>
    // <p class="c3"><span class="c5">End Chat Session</span></p>
    // <p class="c3"><span class="c1">Who are some of your favorite directors to work with?</span></p>
    // <p class="c3"><span class="c0">I share a very special bond with Karan. We have worked together in several
    //         blockbusters like Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham&#39;, and &#39;My Name is Khan&#39;. His
    //         ability to handle complex human relationships in films is outstanding.</span></p>
    // <p class="c3"><span class="c6">434</span></p>
    // <p class="c3"><span class="c10">Who are some of your favorite directors to work with?</span></p>
    // <p class="c3"><span class="c12">I share a very special bond with Karan. We have worked together in several
    //         blockbusters like Kuch Kuch Hota Hai, Kabhi Khushi Kabhie Gham, and My Name is Khan. His ability to handle
    //         complex human relationships in films is outstanding.</span></p>
    // <p class="c3"><span class="c13">Start typing your message here....</span></p>
    // <p class="c3"><span class="c8">444</span></p>
    // </div>
    <>
      <div className="chatbot">
        <div className="header mb-2" style={{ height: "10%" }}>
          <div
            className="heading mb-2"
            style={{
              color: "#ffffff 80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img className="mr-1" src={icon} style={{ width: "75px", height: '60px' }}></img>
            <div className="mr-1">
              Interacting with Shahrukh’s Licensed AI Persona
            </div>
            <div>
              <label class="switch mr-1">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
              <span className='sub-heading'>Avatar</span>
            <button className='d-flex end-chat-btn' style={{}}>
              <img className='mr-1' src={chat}></img>
              <span style={{color: '#C2D24B'}}>
                End Chat Session
                </span>
            </button>
          </div>
        </div>
        <div className='conversation mb-2 mr-2 ml-2'>
          <div style={{height: '90%'}}></div>

              <form id="form" class="conversation-compose ml-2">
                <div className='d-flex' style={{width: '80%',     justifyContent: 'space-between'}}>
                <input id="val" class="input-msg ml-2" name="input" placeholder="Start typing your message here...." autocomplete="off" autofocus>
                </input>
                <img src={sendIcon} style={{height:'50%',alignSelf: 'center' }}></img>
                </div>
              </form>
        </div>
      </div>
    </>
  );
}

export default App;
