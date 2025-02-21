pipeline {
    agent any
    
    tools { 
        nodejs "NODEJS_HOME"  // Assure-toi que l'outil NodeJS est bien configuré dans Jenkins
    }

    environment {
        GIT_REPO_URL = 'https://github.com/yassine-ajroud/indar-deco-backend.git'    
        GIT_BRANCH = 'medamine'
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                // Cloner le dépôt depuis Git
                git url: GIT_REPO_URL, branch: GIT_BRANCH
            }
        }

        stage('Installer les dépendances') {
            steps {
                // Installer les dépendances Node.js
                script {
                    sh 'npm install'
                }
            }
        }

        

        stage('Construire le projet') {
            steps {
                // Construire le projet (si nécessaire)
                script {
                    sh 'npm run build'  // Remplace par la commande de build si nécessaire
                }
            }
        }

        
    }

    
}
