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
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'npm install sonar-scanner'
                        sh 'npm run sonar'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t backend:instardeco ."
                }
            }
        }

        stage('Tag and Push to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh 'docker login -u instartech -p ${dockerhubpwd}'
                        sh 'docker tag backend:instardeco instartech/backend:instardeco'
                        sh 'docker push instartech/backend:instardeco'
                    }
                }
            }
        }
    }
}
