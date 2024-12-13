package initializer

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB

func ConnectToDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("taskmanager.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database")
	}
}
