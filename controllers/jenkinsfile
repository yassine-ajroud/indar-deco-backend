pipeline {
    agent any
    

    environment {
        // Définir des variables d'environnement si nécessaire
        NODE_HOME = '/usr/local/bin/node' // Exemple de variable pour Node.js
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                // Cloner le dépôt depuis Git
                git 'https://github.com/yassine-ajroud/indar-deco-backend.git'
            }
        }

      

       

      
    }

   
}
