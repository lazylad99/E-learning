# E-Learning Site Requirements

## 1. Overview

This document outlines the requirements for the development of an E-Learning site. The site will be designed to facilitate the uploading, management, and secure distribution of educational content, particularly videos. The requirements are derived from the client's needs and aim to ensure a seamless experience for both educators and students.

## 2. Requirements

### 2.1 Automatic File Integration from Zoom

- **Description**: The system must automatically upload files (videos, images, PDFs) from a designated Zoom folder.
- **Functionality**:
  - Schedule regular intervals for file imports.
  - Support for various file types: videos (MP4), images (JPEG, PNG), documents (PDF).

### 2.2 Video Expiration

- **Description**: Implement a feature to set expiration dates for videos.
- **Functionality**:
  - Option for teachers to set expiration dates during upload.
  - Automated restriction of access post-expiration.
  - Notifications to teachers prior to video expiration.

### 2.3 Video Security (Undownloadable)

- **Description**: Ensure that videos cannot be downloaded by unauthorized users.
- **Functionality**:
  - Use bitrate streaming to prevent downloads and enhance security.
  - Disable right-click and other download options in video player.

### 2.4 Video Compression

- **Description**: Implement video compression to optimize storage and playback performance.
- **Functionality**:
  - Automatically compress videos upon upload.
  - Ensure minimal loss of quality.
  - Provide options for different compression levels if necessary.

### 2.5 Multiple Video Uploading

- **Description**: Allow users to upload multiple videos simultaneously.
- **Functionality**:
  - Batch upload interface.
  - Progress indicators for each video.
  - Handle large file uploads efficiently.

### 2.6 Background Video Uploading

- **Description**: Enable video uploads to occur in the background without disrupting user activities.
- **Functionality**:
  - Background processing for uploads.
  - Notifications on upload completion.
  - Ensure the system remains responsive during uploads.

### 2.7 Student Approval 

- **Description**: Teachers have authorization to approve students request to rejoin course.
- **Functionality**:
  - Student can re-apply for course through mail.
  - Teachers can approve/disapprove student's application.

### 2.8 Notifications for Teachers

- **Description**: Provide notifications to teachers for various events.
- **Functionality**:
  - Notify teachers when videos are successfully uploaded.
  - Notify teachers of student approvals.
  - Track multiple account accesses using IP/Mac address with location mapping.
  - Real-time alerts and history logs.

### 2.8 Income/Commission Functionality

- **Description**: Implement functionality to track and manage income and commission.
- **Functionality**:
  - Dashboard for teachers to view earnings.
  - Detailed reports on commissions earned.
  - Automated calculations based on predefined commission structures.

<!-- ## 3. Conclusion

The requirements outlined in this document provide a comprehensive overview of the necessary features and functionalities for the E-Learning site. By adhering to these requirements, the development team can ensure the creation of a robust, user-friendly platform that meets the client's needs and enhances the educational experience for both teachers and students. -->
