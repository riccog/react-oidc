package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/riccog/react-oidc/backend/initializer"
	"github.com/riccog/react-oidc/backend/models"
)

func CreateTasks(c *gin.Context) {

	var body struct {
		Title string
	}

	c.Bind(&body)

	task := models.Task{Title: body.Title, Status: models.Pending}

	result := initializer.DB.Create(&task)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"task": task,
	})
}

func ViewTasks(c *gin.Context) {
	var tasks []models.Task
	initializer.DB.Find(&tasks)

	c.JSON(200, gin.H{
		"tasks": tasks,
	})
}

func DeleteTasks(c *gin.Context) {
	var body struct {
		ID uint
	}

	c.Bind(&body)
	initializer.DB.Delete(&models.Task{}, body.ID)

}

func UpdateTasks(c *gin.Context) {
	var body struct {
		ID     uint
		Status models.TaskStatus
	}

	c.Bind(&body)
	initializer.DB.Model(&models.Task{}).
		Where("id = ?", body.ID).
		Update("status", body.Status)

}
