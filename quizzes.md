**Quiz Feature:**

1. **Question:** Display a question with multiple-choice options.
2. **Multiple Choices:** Display 4-5 multiple-choice options for each question.
3. **Correct Answer:** Store the correct answer for each question.
4. **User Submission:** Allow users to submit their answer.
5. **Result:** Display the result (correct or incorrect) after user submission.

**Backend API Endpoints:**

1. **Quiz API:**
   - `GET /quizzes`: Retrieve a list of all quizzes.
   - `GET /quizzes/:id`: Retrieve a specific quiz by ID.
   - `POST /quizzes`: Create a new quiz.
2. **Question API:**
   - `GET /questions`: Retrieve a list of all questions.
   - `GET /questions/:id`: Retrieve a specific question by ID.
   - `POST /questions`: Create a new question.
3. **Answer API:**
   - `POST /answers`: Submit a user's answer.

**Database Schema:**

1. **Quizzes Table:**
   - `id` (primary key)
   - `title`
2. **Questions Table:**
   - `id` (primary key)
   - `quiz_id` (foreign key referencing the Quizzes table)
   - `question`
   - `options` (JSON array of multiple-choice options)
   - `correct_answer`
3. **Answers Table:**
   - `id` (primary key)
   - `question_id` (foreign key referencing the Questions table)
   - `user_id` (foreign key referencing the Users table)
   - `answer`
   - `result` (correct or incorrect)

**Frontend Components:**

1. **Quiz Component:** Display a quiz with multiple questions.
2. **Question Component:** Display a single question with multiple-choice options.
3. **Answer Component:** Display the result (correct or incorrect) after user submission.

To implement this feature, we'll need to create the following files:

- `backend/controllers/quiz.controller.ts`
- `backend/models/Quiz.ts`
- `backend/models/Question.ts`
- `backend/models/Answer.ts`
- `frontend/src/components/Quiz.tsx`
- `frontend/src/components/Question.tsx`
- `frontend/src/components/Answer.tsx`
