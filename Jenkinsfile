pipeline {
    agent any

    tools { 
        nodejs 'NODE_HOME' // Assure-toi que l'outil nodejs est correctement installé dans Jenkins
    }

    environment {
        // Définir les variables d'environnement pour Git
        GIT_REPO_URL = 'https://github.com/yassine-ajroud/indar-deco-backend.git'
        GIT_BRANCH = 'medamine'
    }

    stages {
        stage('Cloner le dépôt') {
            steps {
                // Cloner le dépôt depuis Git avec la branche définie dans la variable d'environnement
                git url: "${env.GIT_REPO_URL}", branch: "${env.GIT_BRANCH}"
            }
        }
    }
}
