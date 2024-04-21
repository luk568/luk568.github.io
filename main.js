
document.querySelector("li:nth-child(3)").addEventListener("click",()=>{
  main.innerHTML =`
  <div class="quiz-container" id="quiz-container">
        <h1>Quiz Game</h1>
        <div id="question-container-1" class="question-container">
          <div class="question">Lens system plays an important role in camera architecture; which of the following elements is determined by the lens system?</div>
          <div class="allQ">
            <ul class="options">
              <li class="option"><input type="radio" name="q1"value="correct"> <span>length control</span></li>
              <li class="option"><input type="radio" name="q1" value="incorrect"> <span>⁠field of view</span></li>
              <li class="option"><input type="radio" name="q1" value="incorrect"> <span>⁠aperture</span></li>
              <li class="option"><input type="radio" name="q1" value="incorrect"> <span>⁠all of the above</span> </li>
            </ul>
          </div>
        </div>
        <hr>
        <div>
          <button class="submit-btn">Submit</button>
          <button class="quit-btn" id="quit-btn" >Quit</button> 
          <p class="abc">Point:<span class="point">0</span></p>
        </div>
      </div>`
      var submit = document.querySelector(".submit-btn")
      var quit =  document.querySelector(".quit-btn")
      var questionNum = document.querySelector(".question")
      var options = document.querySelectorAll(".option")
      var point = document.querySelector(".point")
      var question = 0
      quit.style.display = "none"
      submit.addEventListener("click",()=>{
        if(question ==0){
            questionNum.innerText="Question 2 :Which of the following is the main function of image processor?"
            var optionItem = ["handling the raw data from the image sensor","⁠controlling the aperture and field of view","providing interface of operation⁠","converting the focused light to electrical signal"]
            options.forEach((option,i)=>{
              option.querySelector("span").innerText = optionItem[i]
            })
          if(options[3].querySelector("input").checked){
              point.innerText ++
          }
          options.forEach(option=>{
            option.querySelector("input").checked = false
          })
          question ++
        }
        
        else if(question ==1){
          questionNum.innerText="Question 3: Which of the following statement is FALSE about CCD sensor?"
          var optionItem = ["It offers excellent dynamic range","⁠It allows faster readout speed","⁠It has a better image quality","⁠It offers low noise image"]
          options.forEach((option,i)=>{
            option.querySelector("span").innerText = optionItem[i]
          })
          if(options[0].querySelector("input").checked){
            point.innerText ++
          }
          options.forEach(option=>{
            option.querySelector("input").checked = false
          })
          question ++
        }
        
        else if(question ==2){
          questionNum.innerText="Question 4 : Which of the following is responsible for converting focused light into an electrical signal in a digital camera?"
          var optionItem = ["Lens system","Image processor","Image sensor","Shutter mechanism"]
          options.forEach((option,i)=>{
            option.querySelector("span").innerText = optionItem[i]
          })
          if(options[1].querySelector("input").checked){
            point.innerText ++
          }
          options.forEach(option=>{
            option.querySelector("input").checked = false
          })
          question ++
        }
        else if(question ==3){
          if(options[2].querySelector("input").checked){
            point.innerText ++
          }
          questionNum.innerText="END"
          document.querySelector(".allQ").innerHTML=`<p>Your final score is ${point.innerText}</p>`
          question = 0
          submit.style.display = "none"
          quit.style.display = "inline"
        }
      
      })
      
      quit.addEventListener("click",()=>{
        questionNum.innerText="Question 1: What is the capital of France?"
        submit.style.display = "inline"
        location.reload()
      })
})

document.querySelector("li:nth-child(2)").addEventListener("click",()=>{
  main.innerHTML =`
  <p id="topic"> Our Members & SID</p>
        <div class="main2">
        <div class="member"> 
        <div>
           <img src="img/People.png">
           <p>Name: Luk Fu Wai </p>
           <p>SID: 55724299</p>
       </div>
   </div>
    <div class="member"> 
       <div>
           <img src="img/People.png">
           <p>Name: Cheung Ho Yan </p>
           <p>SID: 57844190</p>
       </div>
    </div>
   <div class="member"> 
       <div>
           <img src="img/People.png">
           <p>Name: Hung Po Chun </p>
           <p>SID: 56633086</p>
       </div>
   </div>
   <div class="member"> 
       <div>
           <img src="img/People.png">
           <p>Name: Yue Ka Yue </p>
           <p>SID: 56459320</p>
       </div>
   </div>
        </div>
    <div></div>

    <hr>

    <h2>References</h2>

  <ol>
    <li>
      The evolution of digital camera timeline. Timetoast timelines. (2014, January 1). https://www.timetoast.com/timelines/evolution-of-digital-camera 
    </li>
    <li>
      Hicks, S. (2023, July 6). What is Artificial Intelligence (AI) and Why People Should Learn About it - UCF Business Incubation Program - University of Central Florida. UCF Business Incubation Program. https://incubator.ucf.edu/what-is- artificial-intelligence-ai-and-why-people-should-learn-about-it/

    </li>
    <li>
      EOS R10 (Body). (n.d.). Canon. Retrieved April 20, 2024, from https://hk.canon/en/consumer/eos-r10-body/product
    </li>
    <li>
      Encyclopædia Britannica, inc. (2022, April 15). Digital Camera. Encyclopædia Britannica. https://www.britannica.com/technology/digital-camera 
    </li>
    <li>
      Nakotte, L. (2021, January 27). Micro-optical systems made of plastics - all-in optics. All. https://all-in-optics.de/micro-optical-systems-made-of-plastics/ 
    </li>
    <li>
      Agarwal, T. (2019, October 9). Image sensor : Working Principle, types and applications. ElProCus. https://www.elprocus.com/image-sensor-working-applications/ 
    </li>
    <li>
     Schurman, K. (2020, September 13). Learn how to purchase a camera body only. Lifewire. https://www.lifewire.com/what-is-the-camera-body-493269 
    </li>
    <li>
      Design,  iF. (n.d.). Eos M user interface. iF Design. https://ifdesign.com/en/winner-ranking/project/eos-m-user-interface/127567 
    </li>
    <li>
      Callaham, J. (2021, June 1). The first camera phone was sold 22 years ago, and it’s not what you’d expect. Android Authority. Retrieved from https://www.androidauthority.com/first-camera-phone-anniversary-993492/
    </li>
    <li>
      Ovchar, I. (2024, January 22). Is the Apple iPhone 14 Pro a Good Camera in 2024. Fstoppers. Retrieved from https://fstoppers.com/mobile/apple-iphone-14-pro-good-camera-2024-review-653471
    </li>
    <li>
      Cha, B. (2009, October 8). Samsung Omnia 2 photos. Cnet. Retrieved from https://www.cnet.com/pictures/samsung-omnia-2-photos/6/ 
    </li>
    <li>
    Samsung Newsroom. (2013, June 12). Samsung Introduces GALAXY S4 zoom. Retrieved from https://news.samsung.com/global/samsung-introduces-galaxy-s4-zoom-the-first-smartphone-to-offer-10x-optical-zoom-for-perfect-picture-taking
    </li>
    <li>
    Science Museum Group. (n.d.). Kyocera ‘Visualphone VP210’ mobile video phone, 1999. Retrieved from https://collection.sciencemuseumgroup.org.uk/objects/co523555/kyocera-visualphone-vp210-mobile-video-phone-1999-mobile-telephone
    </li>
  
  </ol>`
      
})

var main = document.querySelector("#main")

var content1 = document.querySelector("#content1")
var content2 = document.querySelector("#content2")
var content3 = document.querySelector("#content3")
var content4 = document.querySelector("#content4")
var content5 = document.querySelector("#content5")
var content6 = document.querySelector("#content6")

content1.addEventListener("click",()=>{
  main.innerHTML =`<div class="intro-main">
  <div class ="intro-inner"> 
    <img class = into_bg  src="/img/intro-bg.jpg" alt="BG">
    <h1 class ="intro-head">Introduction to Digital Cameras</h1>
    
   
    <div class="intro-content">
      <img src="/img/int.webp" style="width: 500px;">

      <p>
      
        Digital cameras have revolutionized how we capture and preserve memories. With advanced technology, they offer an
        array of features and capabilities, allowing users to capture moments with clarity and precision. Digital cameras
        use image sensors, processors, and intelligent software to convert light into digital data, which can be stored and
        edited. This enables photographers to experiment with settings, adjust exposure, and apply creative effects, while
        enjoying instant feedback and the ability to review and share their work immediately.
      </p>
    </div>
  </div>`
})

var contentItems = document.querySelectorAll(".content-item");


contentItems.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    
    item.style.transform = "scale(1.1)";
  });

  item.addEventListener("mouseout", function() {
   
    item.style.transform = "scale(1)";
  });
});

content5.addEventListener("click",()=>{
  main.innerHTML = `<div class=" trend-main">

  <div style="margin: 20px; padding: 30px;">
    

    <h2 style="text-align: center; font-size: 25px;font-family: 'Courier New', Courier, monospace; ">Future Trends and Innovations in Digital Cameras</h2>
    <hr>
    <img style="position: absolute; opacity: 0.25;"  src="/img/trend.jpg" alt="BG">
    

    <div id="trend-content" style="font-size: 25px; position: absolute;color: #000407; font-family: 'Courier New', Courier, monospace;">
      <h3 style="text-align: center;">Compact and Powerful</h3>
      
      <p style ="font-weight: 600;">
        As technology continues to advance, we're seeing a trend towards smaller, lighter, and more powerful digital cameras. Mirrorless cameras, in particular, are leading the charge with their compact, streamlined designs that pack in advanced imaging sensors, powerful processors, and a wealth of AI-powered features. These modern mirrorless cameras offer DSLR-quality images in a body that's easy to carry and travel with, making them an attractive option for both professional and enthusiast photographers alike.​
      </p>

      <img class="center" src="/img/cap.webp" alt="BG">
    
    

      <h3 style="text-align: center;" ;>Intuitive User Interfaces</h3>
      <p style ="font-weight: 600;">
        The user interface of digital cameras is also evolving rapidly, with more advanced and intuitive controls that put powerful photographic tools at the user's fingertips. We're seeing the integration of touchscreens, gesture-based controls, and even holographic interfaces that project controls and settings into the air, allowing for a more seamless and immersive photography experience. These innovations are making it easier than ever for both novice and experienced photographers to capture stunning images with minimal hassle.​
      </p>
      <img class="center" src="/img/UI2.jpg" alt="BG">
    
    
    
      <h3 style="text-align: center;">Immersive Capture</h3>
      <p style ="font-weight: 600;">
        Another exciting trend in digital camera technology is the rise of 360-degree and virtual reality (VR) capture. Cameras with multiple lenses and advanced image processing can now capture fully immersive, spherical footage that allows viewers to experience a scene from any angle. This technology is revolutionizing the way we capture and consume visual content, opening up new creative possibilities for filmmakers, photographers, and VR enthusiasts. As VR headsets and other immersive display technologies continue to evolve, the demand for high-quality 360-degree cameras is only expected to grow.​
      </p>
      <img class="center" src="/img/VR.jpg" alt="BG">
  
    
    
      <h3 style="text-align: center;">Computational Photography</h3>
      <p style ="font-weight: 600;">
        Computational photography techniques, which leverage advanced algorithms and multiple image sensors, are enabling features like enhanced low-light performance, improved dynamic range, and advanced computational bokeh effects. These AI-powered features are revolutionizing the way we capture and process images, allowing photographers to achieve results that were previously only possible with specialized equipment and extensive post-processing. As AI technology continues to advance, we can expect to see even more innovative computational photography features in the years to come.​
      </p>
      <img class="center" src="/img/AI.jpg" alt="BG">
    <div>
  </div>
</div>`
})



content3.addEventListener("click",()=>{
  main.innerHTML =`  <div id="System-container" style="text-align: center;padding: 50px; background-color: antiquewhite;" >
  <h2 style=" font-weight: 900" ;class="System-h">Embedded Systems in Digital Cameras</h2>
  <hr>

  <p class="System-p">Digital cameras have come a long way from their simple point-and-shoot origins. They now incorporate advanced embedded systems that provide a wide range of features and capabilities. These systems rely on powerful microprocessors and specialized image processing chips to handle tasks like capturing, processing, and storing images in real-time. The embedded software that runs on these platforms plays a vital role as well.</p>
  
 
  <img src="/img/system.png" alt="Embedded Systems in Digital Cameras" style="display: block; margin: 0 auto; max-width: 80%;">
  <p class="System-p">It includes firmware and operating systems that manage various camera functions, such as autofocus, exposure control, image compression, and file management. This software is carefully designed to ensure smooth integration with the camera's hardware, resulting in a seamless and responsive user experience. Alongside processing and software, digital cameras also feature high levels of hardware integration. This means that sensors, lenses, memory modules, and other components work together harmoniously to achieve optimal image quality, energy efficiency, and overall system reliability.​</p>
  <p class="System-p">Embedded systems have played a crucial role in the advancement of digital cameras, allowing for the integration of advanced features like burst shooting, advanced autofocus, HDR imaging, and computational photography techniques. As technology continues to progress, we can expect even more sophisticated embedded systems in future camera designs, expanding the capabilities of these devices.</p>
</div>`
})

content4.addEventListener("click",()=>{
  main.innerHTML =`<div id = "Sensors-container">
        
  <div id = "sensor-inner">
    <h2 id = "sensor-bh">Imaging Sensors: CCD vs. CMOS</h2>
    <hr>
    <div id="comparison">
    <h3 class="comparison-h">CCD Sensors</h3>
    <p class="comparison-p">
      CCD sensors are known for their high image quality, low noise, and excellent dynamic range. They use a process of shifting charge across the sensor to read out the image data, resulting in a very uniform and high-fidelity signal.
    </p>
    <img src="img/CCD2.jpg">
    <h3 class="comparison-h">CMOS Sensors</h3>
    <p class="comparison-p">
      CMOS sensors use an active pixel design where each pixel has its own amplifier and readout circuitry. This allows for faster readout speeds, lower power consumption, and the ability to integrate additional functionalities like on-chip image processing.
    </p>
    <img src="img/COMS.jpg">
    <h3 class="comparison-h">Comparison</h3>
    <ul class="comparison-p">
      <li>Image Quality: CCD sensors offer <span style="color: red;">higher image quality</span> and better dynamic range compared to CMOS sensors.</li>
      <li>Noise: CCD sensors have <span style="color: red;">lower noise levels</span>, resulting in cleaner images.</li>
      <li>Readout Speed: CMOS sensors have <span style="color: red;">faster readout speeds</span>, allowing for higher frame rates.</li>
      <li>Power Consumption: CMOS sensors consume <span style="color: red;">less power than CCD sensors</span>.</li>
      <li>Additional Functionalities: CMOS sensors can integrate <span style="color: red;">on-chip image processing</span> and other functionalities.</li>
    </ul>
  </div>
</div>`
})



content6.addEventListener("click",()=>{
  main.innerHTML =`<img id = anatomy-bg2 src="img/hist5.jpg">
  <div class = anatomy-container>

  
   
    
  
    <div antiquewhite;class = anatomy-inner>
        <h2 class = anatomy-head>Embedded cameras in a smartphone</h2>
        <div class = anatomy1>
          <h3 class="anatomy-h">History</h3>
            <p class ="anatomy-p" style="text-align: center; padding: 30px;">
              The first ever smartphone with a built-in camera was the model Kyocera Visual Phone VP-210, which was released in Japan in May 1999. The phone used a single tiny 0.11MP (110,000) pixel front-facing camera with 2 video frame per second, with a camera lens of 5cm. The phone was able to take up to 20 pictures and display 65,000 colors on the 2-inch color TFT display. This was a huge milestone in worldwide technology by the time. 
            </p>
            <img style=width:300px;align-self:center; src="img/hist1.png">
      
        </div>
        <div class = anatomy2>
          <h3 class="anatomy-h"></h3>
          <p class = "anatomy-p" style="text-align: center; padding: 30px;">
            Along with the enhancement of technology, more advanced cameras phones are being developed, starting to replace the traditional independent point-and-shoot cameras. For instance, the Samsung i8000 Omnia II was released in July 2009. 10 years after the first ever camera phone was released, the Omnia II already had a massive upgrade in terms of camera functionality. The phone has a 5 Mega-pixel camera ambient light sensor, which was also able to record 720 x 480 pixels videos at 30 frames per second. The phone was built with a 2-stage shutter button, which activates the autofocus and light meter of the camera, allowing the camera to achieve correct focus and exposure, and maintaining focus point and re-composition. The button was built to resemble the point-and-shoot function from independent digital cameras.
          </p>
          <img style=width:300px;align-self:center; src="img/hist2.png">
        </div>
        <div class = anatomy3>
          <h3 class ="anatomy-h"></h3>
          <p class = "anatomy-p" style="text-align: center; padding: 30px;">
            With the proliferation of smartphones, some models were designed as a combination of camera and mobile phones, looking to substitute some low-end independent digital cameras. For example, the July 2013 released Samsung Galaxy S4 Zoom. The camera phone uses a 16Mega-pixel camera with BSI-CMOS sensor with 10x optical zoom, which was one of the best back then. It can take videos in 1080p 30 frames per second, with both auto and manual camera control, and could compete with those low to mid-end point-and-shoot digital cameras at that moment. 
          </p>
          <img  style=width:300px;align-self:center; src="img/hist3.png">
        </div>
        <div  class = anatomy4>
          <h3 class ="anatomy-h"></h3>
          <p class ="anatomy-p" style="text-align: center; padding: 30px;">
            Fast forward to recent years, the cameras in smartphones have improved drastically. The Iphone 14 Pro Max is treated as one of the best camera smartphones in 2024, with multiple lens such as a 48 mega-pixel seven-element lens for image stabilization, a 12 mega-pixel ultra-wide lens that could capture a 120-degree field of view, and up to a 15x digital zoom. The phone can also record 4K videos at the highest 60 frames per second, with numerous outstanding features that can go toe-to-toe with the most independent digital camera in terms of functionalities.
          </p>
          <img style=width:600px;align-self:center; src="img/hist4.jpg">
        </div>
      
      </div>
      
    </div> 
`
})



content2.addEventListener("click",()=>{
  
  main.innerHTML =`
  <img class = anatomy-bg src="img/Anatomy2.jpg">

  <div class = anatomy-container>

  

  <div class = anatomy-inner>
      <h2 class = anatomy-head>Anatomy of a Digital Camera</h2>
      <div class = anatomy1>
        <h3 class="anatomy-h">Lens system:</h3>
          <p class ="anatomy-p" style="text-align: center;">
            At the heart of a digital camera is the lens system, which consists of multiple optical elements that work together to focus light onto the image sensor. The lens system plays a critical role in determining the camera's focal length, field of view, and aperture control, all of which have a significant impact on the quality and characteristics of the captured images.
          </p>
        <img src="img/len.jpg">
      </div>
      <div class = anatomy2>
        <h3 class="anatomy-h">Image sensor:</h3>
        <p class = "anatomy-p">
          The image sensor is the digital equivalent of film in a traditional camera. It is responsible for converting the focused light into an electrical signal that can be processed and stored as a digital image. Modern digital cameras typically use either a charge-coupled device (CCD) or a complementary metal-oxide-semiconductor (CMOS) image sensor, each with its own advantages and trade-offs.
        </p>
        <img src="img/sensor.jpg">
      </div>
      <div class = anatomy3>
        <h3 class ="anatomy-h">Image processor:</h3>
        <p class = "anatomy-p">
          The image processor is the "brain" of the digital camera, responsible for handling the raw data from the image sensor and applying various processing algorithms to produce the final, high-quality image. This includes tasks such as white balance adjustment, noise reduction, image sharpening, and compression before the image is stored on the camera's memory card.
        </p>
        <img src="img/process.jpg">
      </div>
      <div  class = anatomy4>
        <h3 class ="anatomy-h">Camera body:</h3>
        <p class ="anatomy-p">
          The camera body houses all the essential components and provides the necessary controls and interfaces for the user to operate the device. This includes the viewfinder, LCD screen, buttons, and dials that allow the user to adjust settings, frame the shot, and capture the image. The camera body also protects the internal components and provides a sturdy, ergonomic design for comfortable handling.
        </p>
        <img src="img/body.jpg">
      </div>
    </div>
  </div> `
})


var home = document.querySelector("li.function-item")
home.addEventListener("click",()=>{
  main.innerHTML= `<div class="hist">
  <p id="hist"> The History of digital camera</p>
</div>


<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">1975</div>
    <div class="timeline-content">
      <h3>First Digital Camera</h3>
      <img src="img/1.png" alt="C1" class="timeline-image">
      <p>The first commercially available digital camera was introduced.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">1988</div>
    <div class="timeline-content">
      <h3>1988 Fuji Fujix DS-1P</h3>
      <img src="img/2.png" alt="C1" class="timeline-image">
      <p>The first true digital camera , it have memory and available to store 10 photographs</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">1990</div>
    <div class="timeline-content">
      <h3>1990 Dycam Model 1</h3>
      <img src="img/3.png" alt="C1" class="timeline-image">
      <p>Pioneering digital camera revolutionizing photography</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">1999</div>
    <div class="timeline-content">
      <h3>1999 Kyocera VP-210</h3>
      <img src="img/phone.png" alt="C1" class="timeline-image">
      <p>The first camera phone.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2007</div>
    <div class="timeline-content">
      <h3>Iphone </h3>
      <img src="img/iphone.png" alt="C1" class="timeline-image">
      <p>More high quality and compact carmera on mobile phone</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2010-Now</div>
    <div class="timeline-content">
      <h3>Hight quality camera</h3>
      <img src="img/camera.png" alt="C1" class="timeline-image">
      <p>Full HD (1920x1080 pixels), 4K UHD (3840x2160 pixels), and even higher</p>
    </div>
  </div>
</div>`
})