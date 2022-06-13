// Inicializar Firebase
var config = {
    apiKey: "AIzaSyA37GvNeX1VYIOXI_f43fmCH3gwQFSKzPo",

    authDomain: "examenfirebase-fc5ef.firebaseapp.com",
  
    projectId: "examenfirebase-fc5ef",
  
    storageBucket: "examenfirebase-fc5ef.appspot.com",
  
    messagingSenderId: "341766345855",
  
    appId: "1:341766345855:web:cd5e3d52fbca1165e9db4a"
  };
  firebase.initializeApp(config);
  
  
  // Referencia a la colección messages
  var messagesRef = firebase.database().ref('messages');
  
  // Esperando el envío de mensajes
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Enviar formulario
  function submitForm(e){
    e.preventDefault();
  
    // Obtener valores
    var Name = getInputVal('Name');
    var Email = getInputVal('Email');
    var Website = getInputVal('Website');
    var Budget = getInputVal('Budget');
    var Timeline = getInputVal('Timeline');
    var Tres = getInputVal('Tres');
    var Text = getInputVal('Text');
  
    // Guardar mensaje
    saveMessage(Name, Email, Website, Budget, Timeline, Tres, Text);
  
    // Mostrar alerta
    document.querySelector('.alert').style.display = 'block';
  
    // Ocultar alerta después de 3 segundos
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Limpiar formulario
    document.getElementById('contactForm').reset();
  }
  
  // Función para obtener el valor del formulario
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Guardar el mensaje en Firebase
  function saveMessage(Name, Email, Website, Budget, Timeline, Tres, Text){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      Name: Name,
      Email: Email,
      Website: Website,
      Budget: Budget,
      Timeline: Timeline,
      Tres : Tres,
      Text : Text
    });
  }