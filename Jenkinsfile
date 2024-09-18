pipeline {
    agent any
    parameters {
        string(
            name: 'email', 
            defaultValue: 'test@gmail.com', 
            description: 'Email address to send notification' )
    }
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

    post {
        failure {
            mail(
                to: "${params.email}",
                subject: "${JOB_NAME}.${BUILD_NUMBER} FAILED",
                body: "${JOB_NAME}.${BUILD_NUMBER} FAILED"
            )
        }
        success {
            mail(
                to: "${params.email}",
                subject: "${JOB_NAME}.${BUILD_NUMBER} PASSED",
                body: "${JOB_NAME}.${BUILD_NUMBER} PASSED"
            )
        }
    }
}
