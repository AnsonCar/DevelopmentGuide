# Use Git
係vscode下載 git graph

1. cpoy 個file落泥
```
git clone https://github.com/Michellewongyeeyan/NLP_in_map.git
```
之後打開project

2. 更新情況
pull 可以拎返人github云上面最新嘅code到本地project
```
git pull
```

3. 開始工作路線
checkout -b 開始一條你嘅路線，個名
格式:
```username/[feature|fix]/yourjob```
首先打你名，係feature定fix bug，同你要做嘅嘢係咩。
```
git checkout -b username/feature/yourjob
```

4. 每次小工作
commit 要寫 你做咗啲咩
```
[Add|Fix|Change|Update] your job 
```

5. 做完之後
搞完就Merge去主線

## 開發方式
### Setp 1 
下載源代碼
```
git clone https://github.com/AnsonCar/PiggyFlow.git
```

### Setp 2
更新到最新版本
>（每次開的分支都需要確保為最新版本，減少麻煩）
```
git pull
```

### Step 3
根據開發需求，開設分支。
1. 先寫上你的名字，方便分別開發者。
2. 如果是新增功能就寫 feature，如果是修復Bug就寫 fix
3. 最後寫下大約會在這分支的事情
```
git checkput -b username/[feature|fix]/XXXX
```

###  Step 4
開發完成後，就可以 ...