pipeline {
    agent { node 'xyz' }
    parameters {
        string(
            name: 'email', 
            defaultValue: 'muhabenhirt@gmail.com', 
            description: 'Email address to send notification' )
    }
    stages {
        stage('Build') {
            steps {
                echo 'install the npm packages ss'
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

        stage('Debloy') {
            steps {
                echo 'deploy'
                sh ''
            }
        }
    }

    post {
            failure {
                emailext(
                    subject: "${JOB_NAME}.${BUILD_NUMBER} FAILED",
                    mimeType: 'text/html',
                    to: "$email",
                    body: "${JOB_NAME}.${BUILD_NUMBER} FAILED"
                )
            }
            success {
                emailext(
                    subject: "${JOB_NAME}.${BUILD_NUMBER} PASSED",
                    mimeType: 'text/html',
                    to: "$email",
                    body: "${JOB_NAME}.${BUILD_NUMBER} PASSED"
                )
            }
    }
}