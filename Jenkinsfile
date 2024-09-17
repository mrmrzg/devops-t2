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
            steps {
                script {
                    try {
                        emailext(
                            subject: "${JOB_NAME}.${BUILD_NUMBER} FAILED",
                            mimeType: 'text/html',
                            to: "${params.email}",
                            body: "${JOB_NAME}.${BUILD_NUMBER} FAILED"
                        )
                    } catch (Exception e) {
                        echo "Failed to send email: ${e.message}"
                    }
                }
            }
        }
        success {
            steps {
                script {
                    try {
                        emailext(
                            subject: "${JOB_NAME}.${BUILD_NUMBER} PASSED",
                            mimeType: 'text/html',
                            to: "${params.email}",
                            body: "${JOB_NAME}.${BUILD_NUMBER} PASSED"
                        )
                    } catch (Exception e) {
                        echo "Failed to send email: ${e.message}"
                    }
                }
            }
        }
    }
}
