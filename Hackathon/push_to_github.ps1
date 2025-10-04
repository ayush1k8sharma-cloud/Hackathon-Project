# PowerShell script to push FitLife website to GitHub
Write-Host "🚀 FitLife Website - GitHub Push Script" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

# Check if Git is available
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
        
        # Initialize repository
        Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
        git init
        
        # Add all files
        Write-Host "📦 Adding all files..." -ForegroundColor Yellow
        git add .
        
        # Commit changes
        Write-Host "💾 Committing changes..." -ForegroundColor Yellow
        git commit -m "Initial commit: FitLife fitness website with 21 workout videos"
        
        # Set main branch
        Write-Host "🌿 Setting main branch..." -ForegroundColor Yellow
        git branch -M main
        
        # Add remote origin
        Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
        git remote add origin https://github.com/ayush1k8sharma-cloud/Hackathon-Project.git
        
        # Push to GitHub
        Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
        git push -u origin main
        
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host "🌐 Repository: https://github.com/ayush1k8sharma-cloud/Hackathon-Project" -ForegroundColor Cyan
        
    } else {
        throw "Git not found"
    }
} catch {
    Write-Host "❌ Git not found or not working properly" -ForegroundColor Red
    Write-Host "📋 Manual upload instructions:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/ayush1k8sharma-cloud/Hackathon-Project" -ForegroundColor White
    Write-Host "2. Click 'uploading an existing file'" -ForegroundColor White
    Write-Host "3. Drag and drop all files from this folder" -ForegroundColor White
    Write-Host "4. Add commit message: 'Initial commit: FitLife fitness website'" -ForegroundColor White
    Write-Host "5. Click 'Commit changes'" -ForegroundColor White
    Write-Host ""
    Write-Host "📁 Files to upload:" -ForegroundColor Yellow
    Get-ChildItem -Name "*.html", "*.css", "*.js", "*.md", "*.bat" | ForEach-Object { Write-Host "   $_" -ForegroundColor White }
    Write-Host "   images/ (folder)" -ForegroundColor White
}

Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
