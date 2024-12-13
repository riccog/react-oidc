package models

type Task struct {
	ID     uint       `gorm:"primaryKey"`
	Title  string     `gorm:"column:taskname;unique"`
	Status TaskStatus `gorm:"type:ENUM('Pending', 'InProgress', 'Completed');default:'Pending'"`
}

type TaskStatus string

const (
	Pending    TaskStatus = "Pending"
	InProgress TaskStatus = "InProgress"
	Completed  TaskStatus = "Completed"
)
