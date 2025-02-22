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
        stage('Clone Repository') {
            steps {
                git url: GIT_REPO_URL, branch: GIT_BRANCH
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build the Project') {
            steps {
                script {
                    sh 'npm run build:prod'  
                }
            }
        }
        stage('SonarQube Analysis') {
    
        stage('SonarQube Analysis - Backend') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        dir(BACKEND_DIR) {
                            sh 'npm install sonar-scanner'
                            sh 'npm run sonar'
                        }
                    }
                }
            }
        }
        
    
}
    }
}
