package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/riccog/react-oidc/backend/controllers"
	"github.com/riccog/react-oidc/backend/initializer"
)

func init() {
	initializer.ConnectToDB()
}

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // React frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	r.POST("/task", controllers.CreateTasks)
	r.GET("/task", controllers.ViewTasks)
	r.DELETE("/task", controllers.DeleteTasks)
	r.PUT("/task", controllers.UpdateTasks)
	r.Run()
}
