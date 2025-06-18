// Questions du quiz avec les réponses correctes désigné par (correct:(0,1,2,3...))
    const questions = [
      { q: "Que signifie HTML ?",
         a: ["Hyper Text Markup Language", "How To Make Links", "High Tech Modern Language", "Header Text Main Level"], correct: 0 },

      { q: "Quel langage rend une page web interactive ?",
         a: ["CSS", "HTML", "JavaScript", "Python"], correct: 2 },

      { q: "CSS est utilisé pour :",
         a: ["Créer des bases de données", "Styliser les pages web", "Envoyer des emails", "Héberger un site"], correct: 1 },

      { q: "La balise <a> sert à :",
         a: ["Ajouter un style", "Insérer une image", "Créer un lien", "Faire une boucle"], correct: 2 },

      { q: "Git est :", 
         a: ["Un logiciel de traitement de texte", "Un système de contrôle de version", "Un serveur web", "Un langage de script"], correct: 1 },

      { q: "Quel est le rôle principal d'un navigateur web ?", 
        a: ["Programmer des sites", "Créer des images", "Interpréter et afficher le code web", "Stocker des bases de données"], correct: 2 },

      { q: "JavaScript est un langage côté :",
       a: ["Client", "Serveur", "Base de données", "Mobile"], correct: 0 },

      { q: "Quelle est la dernière version de HTML ?",
       a: ["HTML2", "HTML4", "HTML5", "HTMLX"], correct: 2 },

      { q: "Un fichier CSS peut être lié au HTML avec :", 
      a: ["link", "css", "style", "script"], correct: 0 },

      { q: "Le Cloud computing permet :", 
      a: ["Créer des nuages", "Stocker et accéder aux données à distance", "Améliorer la météo", "Lancer des satellites"], correct: 1 },

      { q: "Quel outil permet de collaborer sur du code ?", 
      a: ["Excel", "Photoshop", "GitHub", "Zoom"], correct: 2 },

      { q: "Responsive design signifie :",
       a: ["Site rapide", "Code sécurisé", "Adapté à tout écran", "Design interactif"], correct: 2 },

      { q: "Quel protocole est utilisé pour sécuriser les sites web ?", 
      a: ["HTTP", "FTP", "SMTP", "HTTPS"], correct: 3 },

      { q: "L'intelligence artificielle est souvent utilisée pour :",
       a: ["Dessiner", "Analyser des données et apprendre", "Créer du béton", "Écrire en braille"], correct: 1 },
       
      { q: "Quel langage n'est pas utilisé pour le web ?", 
      a: ["JavaScript", "Ruby", "PHP", "Excel"], correct: 3 },

      { q: "Le Wordpress est un:",
        a: ["un logiciel", "un CMS", "une application web", "un langage"], correct: 1 },

      { q: "L'extension Elementor sert à;",
            a:["creer des formulaire", "à ajouter des images", "modifier les pages", "hébergé un site"], correct: 2 },
        
      { q: "Il sert à acheter un nom de domaine ",
         a: ["Pinterest", "cocalc", "Gitbash", "Infinitifree"], correct: 3},

         { q: "Un template est un design pré-fait",
            a: ["Vrai", "Faux", "Aucune bonne reponse"], correct: 0
         },

      {
        q: "Qui est l'actuel Président de la république togolaise",
       a:["Mr TOSSOU Assouan", "Mr SANVI DE TOVE", "Mr Faure GNASSINGBE", "Mr AFOGNON Achille", "Mr YARK DAMEHAME"], correct: 1
      }

    ];

    let current = 0;
    let score = 0;
    let timeLeft = 20 * 60;
    let timer;

    

    // Démarrage du quiz
    function startQuiz() {
      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      if (!nom || !email) return alert("Veuillez remplir tous les champs");

      document.getElementById("userInfo").style.display = "none";
      document.getElementById("quizContainer").style.display = "block";
      showQuestion();
        //demarre le décompte du temps
      timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);//calacule le nombre de min restant
        const seconds = timeLeft % 60;//calacule les secondes restants
        //met à jour le temps restants sur le quiz
        document.getElementById("timer").textContent = `Temps restant : ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        //template permettant de chaine de caractère permettant d'afficher le temps comme ceci 10:19
        if (--timeLeft <= 0) endQuiz();
      }, 1000)//fin du quiz ici, ca décremente le temps de 1s et si t<= 0 alors la fonction endQuiz prend le relais.
    } 

    // Affiche une question showQuestion affiches les questions une à la fois
    function showQuestion() {
      const question = questions[current];//recupère l'objet de la question (titre)
      const html = `<h3>${current + 1}. ${question.q}</h3>` + //cette partie génère les reponses des questions
        question.a.map((choice, i) => 
          `<label><input type="radio" name="q${current}" value="${i}"> ${choice}</label><br>`
        ).join("");// parcours les réponses et permettre de choisir une réponse en un click
      document.getElementById("questions").innerHTML = html; // la div html <question> récupère tout ces informations en bloc
    }

    // Passer à la question suivante
    function nextQuestion() {
      const answers = document.getElementsByName(`q${current}`);// ici il reste dans le bloc de la question
      let selected = -1;//initialise une de décompte à -1 pour aucune reponse sélectionner
      answers.forEach((el, i) => { if (el.checked) selected = i; });//s'exécute si on choisit une réponse et il enregistre pour le score

      if (selected === -1) return alert("Choisissez une réponse"); // ici le code t'oblige à choisir une réponse obligatoire avanatd'afficher la quetion suivante

      if (selected == questions[current].correct) score++;current++;// il incrémente si la reponse est juste ou pas

      if (current < questions.length) {
        showQuestion();// si c'est pas la derniere question il affiche le suivant
      } else {
        endQuiz();// si c'est le dernier alors la fonction endQuiz prend le relais
      }
    }

    // Fin du quiz et affichage du score et ensuite permettre de jouer une nouvelle fois
    function endQuiz() {
      clearInterval(timer);
      document.getElementById("quizContainer").style.display = "none";
      document.getElementById("resultat").innerHTML = `Quiz terminé ! <br> Votre score est de ${score} sur ${questions.length}. <br><br><button onclick="location.reload()">Rejouer</button>`;
    }


        const joueur = {
    nom: nom,
    email: email,
    score: score,
    total: questions.length,
    date: new Date().toLocaleString()
    };

    localStorage.setItem("dernierJoueur", JSON.stringify(joueur));// stocker en format json dans localstorage

    const joueurStocke = JSON.parse(localStorage.getItem("dernierJoueur"));
document.getElementById("resultat").innerHTML = `
  Quiz terminé ! <br>
  Bravo ${joueurStocke.nom}  !<br>
  Score : ${joueurStocke.score} / ${joueurStocke.total}<br>
  Joué le : ${joueurStocke.date}<br><br>
  <button onclick="location.reload()">Rejouer</button>
`;



