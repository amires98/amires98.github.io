
document.getElementById("home").onclick = function() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
    <h4 id="greetings">Welcome !</h4>
    <h6>I am Amir Esmaeilpour Moghaddam, currently a B.Sc. computer engineering student at the <a class="non_underline-link" href="https://en.kntu.ac.ir/">K. N. Toosi University of Technology</a>, Iran.</h6>
</div>
<div id="content-text">
    <p>
    I would describe myself as a curious <strong>Mathematics</strong> and <strong>Artificial intelligence</strong> enthusiast who is eager to learn and conduct research where these two subjects intersect.
    My main interest is <strong>Machine learning</strong> and its applications, especially in <strong>computer vision</strong>, <strong>Image processing</strong>, and <strong>natural language processing</strong>. 
    
    </p>
    <p>
    Starting about three years ago, I have been trying to learn as much as I can about machine learning and computer vision both inside and outside the university.
    I have passed several AI-related courses, all with A's (listed in my CV), and have practiced this knowledge in severals <a  onclick="show_projects()" class="non_underline-link blue-btn projects" href="#" >projects</a>. I ranked 180 out of 30k students (top 0.6%) in our national university entrance exam.
    </p>
    <p>
    My primary goal is to continue my studies at a top-ranking university and spread my knowledge in <strong>Mathematics</strong> and  <strong>Artificial intelligence</strong> simultaneously to be a worthy contributor to science.
    </p>
</div>
<div id = "updateBox">
    <p>
        <strong> Latest Updates: </strong> I'm happy to announce that due to the promising results of my B.Sc Thesis, I will publish my first paper very soon. Special thanks to my supervisor <a class="non_underline-link" href="https://scholar.google.com/citations?user=xL4n9qYAAAAJ&hl=en">Dr. Behrooz Nasihatkon </a><a  onclick="show_pub()" href="#" >(click here)</a>.  
    </p>
</div>
    `
	document.getElementById("home").style.color = "black"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	
    return false;
}


function show_projects() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h5>Over the years, I have had the chance to put what I've learned into practice.</h5>
        <h5>Here are some of the major ones.
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/amires98/Edge-Flow-using-MRF"> Edge Motion Detection by Discrete Markov Random Fields and Belief Propagation (personal project)</a></h6>
        <img class="proj-image width-90" src="data/PGM.jpg" alt="">
    </div>
    <div class="row">
        <div class="proj-item " id="BS-thesis">
            <h6><a class="non_underline-link" href="">Neural Network form scratch for cifar-10 Images (Stanford CS231n)</a></h6>
            <img class="proj-image" src="data/8.jpg" alt="">
        </div>
        <div class="proj-item " id="AI-Projs" >
            <h6><a class="non_underline-link" href="">Image Captioning with RNN (Stanford CS231n)</a></h6>
            <img class="proj-image" id="AI-Projs-img" src="data/rnn1.jpg" alt="">
        </div>
    </div>
    
	<div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/amires98/kntu_vision_project"> Homography and Classification (The final project of "Fundamentals of Computer Vision" K. N. Toosi University)</a></h6>
        <img class="proj-image width-90" src="data/kntu project.jpg" alt="">
    </div>

    <div class="proj-item">
        <h6><a class="non_underline-link" href=""> Image Captioning with LSTMs (Assignment of Stanford Convolutional Neural Networks for Visual Recognition)</a></h6>
        <img class="proj-image width-90" src="data/caption.jpg" alt="">
    </div>
    
     <div class="proj-item">
    <h6><a class="non_underline-link" href="">Network Visualization (Saliency Maps, Class visualization) (Stanford CS231n)</a></h6>
    <img class="proj-image width-90" src="data/CNN_visualize.jpg" alt="">
    </div>

    <div class="proj-item">
    <h6><a class="non_underline-link" href="">Generative Adversarial Networks (Least Squares GAN, Deeply Convolutional GANs) (Stanford CS231n)</a></h6>
    <img class="proj-image width-90" src="data/GANs.png" alt="">
    </div>


    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "black";
    }
	
    return false;
}


function show_pub() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h4 class="title">Publications</h4>
    </div>
    <div id="content-text">
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <div class="pub">
                    <ul>
                    <p><strong> Windshield Reflection Removal</strong>. Amir Es, B Nasitakon (the code and a preprint will be uploaded after the publishment).</p> 
                    <img class="proj-image width-90" src="data/new_result.jpg" alt="">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "black"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	
    return false;
}
