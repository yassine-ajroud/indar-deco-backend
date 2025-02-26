pipeline {
    agent any

    tools {
        nodejs "NODEJS_HOME"
    }

    environment {
        GIT_REPO_URL = 'https://github.com/yassine-ajroud/indar-deco-backend.git'
        GIT_BRANCH = 'medamine'
        DOCKERHUB_USERNAME = 'instartech'
        IMAGE_NAME = 'backend'
        IMAGE_TAG = 'instardeco'
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

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
            post {
                success {
                    // Publie le rapport de couverture dans Jenkins
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
                failure {
                    // En cas d'échec, affiche un message d'erreur
                    echo 'Tests failed! Check the coverage report for details.'
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
                    sh "docker build -t ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh 'echo ${dockerhubpwd} | docker login -u ${DOCKERHUB_USERNAME} --password-stdin'
                        sh "docker push ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"
                    }
                }
            }
        }

        stage('Clean Docker Resources') {
            steps {
                script {
                    sh '''
                        docker-compose down -v || true
                        docker system prune -a -f || true
                    '''
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                script {
                    sh 'docker-compose --verbose up -d'
                }
            }
        }
    }
}