package main

import (
	"github.com/riccog/react-oidc/backend/initializer"
	"github.com/riccog/react-oidc/backend/models"
)

func init() {
	initializer.ConnectToDB()
}

func main() {
	initializer.DB.AutoMigrate(&models.Task{})
}
