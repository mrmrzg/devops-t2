pipeline {
    agent any
    parameters {
        string(
            name: 'email', 
            defaultValue: 'muhabbenhirt@gmail.com', 
            description: 'Email address to send notification' )
    }
    stages{
        stage("Test-Stage") { 
            steps {
                echo "This is the test stage for Testing Jenkins Job notification"
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
