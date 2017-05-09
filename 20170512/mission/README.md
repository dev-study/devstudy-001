#### 이미 Fork한 개인 repository pull 하기

```
$ cd devstudy-2017-first
$ git remote add upstream https://github.com/dev-study/devstudy-2017-first.git
$ git fetch upstream
$ git merge upstream/master master
$ git rebase upstream/master
```

[링크](http://stackoverflow.com/questions/3903817/pull-new-updates-from-original-github-repository-into-forked-github-repository)
