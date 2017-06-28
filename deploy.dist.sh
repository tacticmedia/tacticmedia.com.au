#!/bin/sh

export WORKINGDIR=/var/www/redifi.net
export LOGFILE=$WORKINGDIR/deploy.log
export HOME=/home/www-data

cd $WORKINGDIR
echo "[Start]" > $LOGFILE
echo "#######" >> $LOGFILE
echo ""
echo "[git reset]" >> $LOGFILE
/usr/bin/git reset --hard 2>&1 >> $LOGFILE
echo ""
echo "[git checkout]" >> $LOGFILE
/usr/bin/git checkout master >> $LOGFILE 2>&1

echo ""
echo "[git pull]" >> $LOGFILE
/usr/bin/git pull >> $LOGFILE 2>&1

echo ""
echo "[chmod +x]" >> $LOGFILE
/bin/chmod +x $WORKINGDIR/*.sh >> $LOGFILE 2>&1

echo "########" >> $LOGFILE
echo "[Finish]" >> $LOGFILE

cat $LOGFILE | mail redifi@redifi.net -s 'redifi.net deployment'
