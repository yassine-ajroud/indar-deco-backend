pipeline {
    agent any
    tools { 
        nodejs "NODEJS_HOME" 
    }

    environment {
        GIT_REPO_URL = 'https://github.com/yassine-ajroud/indar-deco-backend.git'    
        GIT_BRANCH = 'medamine'
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
