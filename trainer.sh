#!/bin/bash

export APP_DIR=./apps/api
export DB_NAME=db.sqlite

resetDatabase() {
    echo "Resetting database..."
    rm ./$DB_NAME
    rm -rf $APP_DIR/public/uploads
    echo "Database reset complete"
}