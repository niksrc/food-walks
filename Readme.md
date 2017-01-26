# Food Walks
> CMS For food walks

## Should Support
- Separate rest api 
- key generation
- CMS Admin
- cli to create new user

## Model

### Site
- emails
- addresses
- 

### User
- email
- password
- forgot password
- createdAt
- updatedAt

### Sections
- id
- name (testimonials, media etc.) 
- description
- meta (JSON)
- createdAt
- updatedAt

### SectionItems
- id
- sectionId
- title
- imageId
- content (JSON)
- meta (JSON)
- createdAt
- updatedAt

### Image
- id
- sectionId
- imagePath
- alt
- createdAt

