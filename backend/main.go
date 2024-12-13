package main

import (
	"github.com/gin-gonic/gin"
	"github.com/riccog/react-oidc/backend/controllers"
	"github.com/riccog/react-oidc/backend/initializer"
)

func init() {
	initializer.ConnectToDB()
}

func main() {
	r := gin.Default()

	r.POST("/task", controllers.CreateTasks)
	r.GET("/task", controllers.ViewTasks)

	r.Run()
}
