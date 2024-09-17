pipeline {
    agent any
    parameters {
        string(
            name: 'email',
            defaultValue: 'muhabbenhirt@gmail.com',
            description: 'Email address to send notification'
        )
    }
    stages {
        stage("Test-Stage") {
            steps {
                echo "This is the test stage for Testing Jenkins Job notification"
                // Simulate a failure (uncomment for testing)
                // error "Simulated failure"
            }
        }
    }
    post {
        always {
            script {
                def buildStatus = currentBuild.currentResult
                def subject = "${JOB_NAME} - Build #${BUILD_NUMBER} - ${buildStatus}"
                def details = """
                    <h2>Build ${buildStatus}!</h2>
                    <p><b>Project:</b> ${JOB_NAME}</p>
                    <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                    <p><b>Status:</b> ${buildStatus}</p>
                    <p><b>Started by:</b> ${currentBuild.getBuildCauses()[0]?.shortDescription}</p>
                    <p><b>Duration:</b> ${currentBuild.durationString}</p>
                    <p><b>Build URL:</b> <a href="${BUILD_URL}">${BUILD_URL}</a></p>
                    <p><b>Console Output:</b> <a href="${BUILD_URL}console">${BUILD_URL}console</a></p>
                """

                // Include changes if any
                def changeLog = ""
                for (change in currentBuild.changeSets) {
                    for (entry in change.items) {
                        changeLog += "<li>${entry.msg} by ${entry.author}</li>"
                    }
                }
                if (changeLog) {
                    details += "<p><b>Changes:</b></p><ul>${changeLog}</ul>"
                } else {
                    details += "<p>No changes.</p>"
                }

                // Send the email
                emailext(
                    to: "${params.email}",
                    subject: subject,
                    body: details,
                    mimeType: 'text/html',
                    attachLog: true
                )
            }
        }
    }
}
