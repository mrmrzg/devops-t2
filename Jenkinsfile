pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'install the npm packages'
                sh 'npm ci'
            }
        }

        stage('Unit Tests') {
            steps {
                echo 'run the unit tests'
                sh 'npm run test:unit'
            }
        }

        stage('Integration Tests') {
            steps {
                echo 'run the integration tests'
                sh 'npm run test:integration'
            }
        }
        stage('Deploy') {
            steps {
                echo 'build the app'
                sh 'npm run build'
            }
        }
    }
}