-- +goose Up
-- +goose StatementBegin
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Auto-incrementing unique identifier
    taskname TEXT UNIQUE NOT NULL,        -- Unique task name (required)
    status TEXT NOT NULL                  -- Status of the task (e.g., 'Pending', 'Completed')
);
;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE tasks;
-- +goose StatementEnd
