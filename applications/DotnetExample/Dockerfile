FROM mcr.microsoft.com/dotnet/sdk:9.0 AS builder
# Bruk /App som mappen restrerende kommandoer skal kjøre i fra
WORKDIR /App

# Copy everything into the App directory
COPY . ./
# Restore the project (install dependencies, etc)
RUN dotnet restore
# Build 
RUN dotnet publish --configuration Realese --output out

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /App
COPY --from=builder /App/out /App/
# Entrypont blir kommandoen som kjøres når container startes
ENTRYPOINT ["dotnet", "DotnetExample.dll"]
