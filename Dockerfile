FROM openjdk:17

WORKDIR /app

COPY . .

RUN ./mvnw package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/Expenses_Tracker-1.0.0.jar"]
