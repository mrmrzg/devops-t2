pipeline {
  agent any
  stages {
    stage('Test-Stage') {
      steps {
        echo 'This is the test stage for Testing Jenkins Job notification'
      }
    }

  }
  post {
    always {
      script {
        try {
          def buildStatus = currentBuild.currentResult
          def subject = "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${buildStatus}"
          def startedBy = ''
          def cause = currentBuild.rawBuild.getCause(hudson.model.Cause$UserIdCause)
          if (cause != null) {
            startedBy = cause.getUserName()
          } else {
            startedBy = 'Unknown'
          }
          def duration = currentBuild.durationString ?: 'N/A'
          def details = """
          <h2>Build ${buildStatus}!</h2>
          <p><b>Project:</b> ${env.JOB_NAME}</p>
          <p><b>Build Number:</b> ${env.BUILD_NUMBER}</p>
          <p><b>Status:</b> ${buildStatus}</p>
          <p><b>Started by:</b> ${startedBy}</p>
          <p><b>Duration:</b> ${duration}</p>
          <p><b>Build URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
          <p><b>Console Output:</b> <a href="${env.BUILD_URL}console">${env.BUILD_URL}console</a></p>
          """

          // Include changes if any
          def changeLog = ""
          def hasChanges = false
          for (changeSet in currentBuild.changeSets) {
            for (entry in changeSet.items) {
              hasChanges = true
              changeLog += "<li>${entry.msg} by ${entry.author}</li>"
            }
          }
          if (hasChanges) {
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
        } catch (Exception e) {
          echo "Failed to send email: ${e.getMessage()}"
        }
      }

    }

  }
  parameters {
    string(name: 'email', defaultValue: 'muhabbenhirt@gmail.com', description: 'Email address to send notification')
  }
}