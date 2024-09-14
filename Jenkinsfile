pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'install the npm packages'
                sh 'npm i'
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
    }
}